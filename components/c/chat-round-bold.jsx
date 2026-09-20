import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsaue0b1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsaue0b1k"/>`,
		"fallback": "solar:chat-round-bold",
	});
}

export default Component;
