import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rnbd7q8ws.css';
import '../../css/z/z-uaizbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rnbd7q8ws"/><path class="z-uaizbta"/></g>`,
		"fallback": "solar:heart-pulse-2-linear",
	});
}

export default Component;
