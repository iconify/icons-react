import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frpv9b9jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frpv9b9jf"/>`,
		"fallback": "mingcute:chat-3-ai-fill",
	});
}

export default Component;
