import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usv4oibvc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usv4oibvc"/>`,
		"fallback": "mdi:chat-remove",
	});
}

export default Component;
