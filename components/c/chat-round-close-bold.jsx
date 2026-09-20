import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se67ui62b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="se67ui62b"/>`,
		"fallback": "solar:chat-round-close-bold",
	});
}

export default Component;
