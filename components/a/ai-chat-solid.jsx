import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0u1j7bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0u1j7bgi"/>`,
		"fallback": "iconaut:ai-chat-solid",
	});
}

export default Component;
