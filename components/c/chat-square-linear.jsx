import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dom1d86ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dom1d86ql"/>`,
		"fallback": "solar:chat-square-linear",
	});
}

export default Component;
