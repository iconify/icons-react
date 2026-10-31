import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkpkt12ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nkpkt12ai"/>`,
		"fallback": "coolicons:chat-heart-round",
	});
}

export default Component;
