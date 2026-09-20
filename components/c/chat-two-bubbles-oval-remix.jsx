import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hov0yh0oa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hov0yh0oa"/>`,
		"fallback": "streamline:chat-two-bubbles-oval-remix",
	});
}

export default Component;
