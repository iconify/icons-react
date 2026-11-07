import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hfi1qwbxh.css';
import '../../css/l/l8iyghbbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hfi1qwbxh"/><path class="l8iyghbbk"/></g>`,
		"fallback": "solar:chat-square-replay-broken",
	});
}

export default Component;
