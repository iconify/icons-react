import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/saeiwpb8z.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="saeiwpb8z"/>`,
		"fallback": "pullo:chat-plus-light",
	});
}

export default Component;
