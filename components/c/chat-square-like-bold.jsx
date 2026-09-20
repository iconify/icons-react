import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zp3xxybqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zp3xxybqi"/>`,
		"fallback": "solar:chat-square-like-bold",
	});
}

export default Component;
