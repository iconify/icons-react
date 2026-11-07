import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qy-t49-ig.css';
import '../../css/e/e9xe4mm9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qy-t49-ig"/><path class="e9xe4mm9e"/></g>`,
		"fallback": "solar:cloud-cross-line-duotone",
	});
}

export default Component;
