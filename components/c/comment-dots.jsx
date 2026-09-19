import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khqzz1b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khqzz1b8z"/>`,
		"fallback": "fa-solid:comment-dots",
	});
}

export default Component;
