import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6oms7qjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c6oms7qjc"/>`,
		"fallback": "solar:chat-round-unread-outline",
	});
}

export default Component;
