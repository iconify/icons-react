import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frqsmrbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="frqsmrbxd"/>`,
		"fallback": "griddy-icons:chat-bubble-text",
	});
}

export default Component;
