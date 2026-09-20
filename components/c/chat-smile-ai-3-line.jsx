import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo1mgl7xt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo1mgl7xt"/>`,
		"fallback": "ri:chat-smile-ai-3-line",
	});
}

export default Component;
