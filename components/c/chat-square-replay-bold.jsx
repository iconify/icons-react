import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/garpmj5-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="garpmj5-w"/>`,
		"fallback": "solar:chat-square-replay-bold",
	});
}

export default Component;
