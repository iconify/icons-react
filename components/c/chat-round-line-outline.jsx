import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j5-fd1b0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j5-fd1b0v"/>`,
		"fallback": "solar:chat-round-line-outline",
	});
}

export default Component;
