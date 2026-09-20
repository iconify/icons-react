import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gc8x28-3v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gc8x28-3v"/>`,
		"fallback": "streamline-flex:chat-bubble-typing-oval-solid",
	});
}

export default Component;
