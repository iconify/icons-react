import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f8yqsxb0s.css';
import '../../css/e/eeeh6jurk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle transform="matrix(-1 0 0 1 22 2)" class="f8yqsxb0s"/><path class="eeeh6jurk"/></g>`,
		"fallback": "solar:chat-round-unread-linear",
	});
}

export default Component;
