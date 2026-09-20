import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz80frbxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cz80frbxs"/>`,
		"fallback": "solar:chat-round-dots-bold",
	});
}

export default Component;
