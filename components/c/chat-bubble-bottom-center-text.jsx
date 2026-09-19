import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-kp13e4i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-kp13e4i"/>`,
		"fallback": "heroicons:chat-bubble-bottom-center-text",
	});
}

export default Component;
