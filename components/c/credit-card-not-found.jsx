import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x39l6x9li.css';
import '../../css/i/i036dddnr.css';
import '../../css/w/wwtd6-bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x39l6x9li"/><path class="i036dddnr"/><path class="wwtd6-bsg"/></g>`,
		"fallback": "hugeicons:credit-card-not-found",
	});
}

export default Component;
