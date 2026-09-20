import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lja_-7uem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lja_-7uem"/>`,
		"fallback": "solar:chat-round-call-bold",
	});
}

export default Component;
