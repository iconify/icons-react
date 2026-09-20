import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwn_nxbwa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwn_nxbwa"/>`,
		"fallback": "streamline:chat-bubble-square-block-solid",
	});
}

export default Component;
