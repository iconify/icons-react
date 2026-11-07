import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llj5-713t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llj5-713t"/>`,
		"fallback": "solar:chat-square-linear",
	});
}

export default Component;
