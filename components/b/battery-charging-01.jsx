import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/omcml5byg.css';
import '../../css/r/r0-cyki5y.css';
import '../../css/y/yuyh56b1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="omcml5byg"/><path class="r0-cyki5y"/><path class="yuyh56b1w"/></g>`,
		"fallback": "hugeicons:battery-charging-01",
	});
}

export default Component;
