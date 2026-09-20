import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ninr9tbnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ninr9tbnu"/>`,
		"fallback": "solar:chat-round-like-outline",
	});
}

export default Component;
