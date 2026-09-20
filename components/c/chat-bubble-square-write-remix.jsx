import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f77xy6wps.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f77xy6wps"/>`,
		"fallback": "streamline:chat-bubble-square-write-remix",
	});
}

export default Component;
