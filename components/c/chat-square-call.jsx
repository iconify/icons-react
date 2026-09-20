import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa-vm9pwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pa-vm9pwa"/>`,
		"fallback": "reicon:chat-square-call",
	});
}

export default Component;
