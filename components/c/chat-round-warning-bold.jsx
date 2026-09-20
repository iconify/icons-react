import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ynsh_1bct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ynsh_1bct"/>`,
		"fallback": "solar:chat-round-warning-bold",
	});
}

export default Component;
