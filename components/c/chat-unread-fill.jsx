import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k025gh__q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k025gh__q"/>`,
		"fallback": "ri:chat-unread-fill",
	});
}

export default Component;
