import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddldl_4lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddldl_4lq"/>`,
		"fallback": "solar:chat-square-like-outline",
	});
}

export default Component;
