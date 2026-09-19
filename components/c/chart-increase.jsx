import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nh-ps30pw.css';
import '../../css/c/c2276wbdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nh-ps30pw"/><path class="c2276wbdc"/></g>`,
		"fallback": "hugeicons:chart-increase",
	});
}

export default Component;
