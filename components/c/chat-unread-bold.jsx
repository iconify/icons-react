import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0boe6iuj.css';
import '../../css/w/wstn7hb1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0boe6iuj"/><path class="wstn7hb1m"/>`,
		"fallback": "solar:chat-unread-bold",
	});
}

export default Component;
