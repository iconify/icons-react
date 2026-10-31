import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws_06cpxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws_06cpxh"/>`,
		"fallback": "coolicons:chat-circle-close-fill-round",
	});
}

export default Component;
