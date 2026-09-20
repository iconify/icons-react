import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsohb8bgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsohb8bgl"/>`,
		"fallback": "mdi:chat-sleep-outline",
	});
}

export default Component;
