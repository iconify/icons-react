import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0xsmyu0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q0xsmyu0g"/>`,
		"fallback": "solar:chat-square-warning-bold",
	});
}

export default Component;
