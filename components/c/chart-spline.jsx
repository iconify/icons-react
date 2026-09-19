import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h1-e-zbfq.css';
import '../../css/n/nh-ps30pw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h1-e-zbfq"/><path class="nh-ps30pw"/></g>`,
		"fallback": "hugeicons:chart-spline",
	});
}

export default Component;
