import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/injk-0v2i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="injk-0v2i"/>`,
		"fallback": "zondicons:chat-bubble-dots",
	});
}

export default Component;
