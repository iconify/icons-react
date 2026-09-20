import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/usldmenox.css';
import '../../css/s/sxj9o-u2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="usldmenox"/><path class="sxj9o-u2n"/></g>`,
		"fallback": "solar:incoming-call-rounded-linear",
	});
}

export default Component;
