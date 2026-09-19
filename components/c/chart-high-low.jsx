import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nh-ps30pw.css';
import '../../css/t/ter5e2_7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nh-ps30pw"/><path class="ter5e2_7l"/></g>`,
		"fallback": "hugeicons:chart-high-low",
	});
}

export default Component;
