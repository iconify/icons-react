import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpue87gvs.css';
import '../../css/i/iezp-tb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpue87gvs"/><path class="iezp-tb3d"/>`,
		"fallback": "streamline-ultimate:cloud-warning-bold",
	});
}

export default Component;
