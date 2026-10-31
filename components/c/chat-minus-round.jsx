import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmnw-9bvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmnw-9bvm"/>`,
		"fallback": "coolicons:chat-minus-round",
	});
}

export default Component;
