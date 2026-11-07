import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hfi1qwbxh.css';
import '../../css/c/c52zk5xmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hfi1qwbxh"/><path class="c52zk5xmv"/></g>`,
		"fallback": "solar:chat-square-close-broken",
	});
}

export default Component;
