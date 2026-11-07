import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9cb8qbxu.css';
import '../../css/d/d7n_wt5my.css';
import '../../css/c/cxt5hpr-p.css';
import '../../css/s/scepf5ivk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9cb8qbxu"/><path class="d7n_wt5my"/><path class="cxt5hpr-p"/><path class="scepf5ivk"/>`,
		"fallback": "solar:cosmetic-bold",
	});
}

export default Component;
