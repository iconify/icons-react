import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-axlvifi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-axlvifi"/>`,
		"fallback": "mingcute:chat-2-fill",
	});
}

export default Component;
