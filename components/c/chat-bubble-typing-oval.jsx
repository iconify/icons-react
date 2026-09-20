import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpw-lplim.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpw-lplim"/>`,
		"fallback": "streamline-flex:chat-bubble-typing-oval",
	});
}

export default Component;
