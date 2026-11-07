import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q7c950bcg.css';
import '../../css/r/ro0lg1blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q7c950bcg"/><path class="ro0lg1blj"/></g>`,
		"fallback": "solar:heart-pulse-2-line-duotone",
	});
}

export default Component;
