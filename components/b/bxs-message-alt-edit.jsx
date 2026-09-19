import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-g5z-w8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-g5z-w8l"/>`,
		"fallback": "bx:bxs-message-alt-edit",
	});
}

export default Component;
