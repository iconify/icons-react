import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/e/e-_t4f13s.css';
import '../../css/f/f5bh_j-5r.css';
import '../../css/c/c937-fbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="e-_t4f13s"/><path class="f5bh_j-5r"/><path class="c937-fbxw"/>`,
		"fallback": "solar:chart-square-bold-duotone",
	});
}

export default Component;
