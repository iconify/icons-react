import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phitpcbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phitpcbgf"/>`,
		"fallback": "griddy-icons:chat-circle-check-filled",
	});
}

export default Component;
