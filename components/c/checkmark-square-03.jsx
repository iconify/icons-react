import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g-ffgwbhc.css';
import '../../css/x/x6-jdn4cq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g-ffgwbhc"/><path class="x6-jdn4cq"/></g>`,
		"fallback": "hugeicons:checkmark-square-03",
	});
}

export default Component;
