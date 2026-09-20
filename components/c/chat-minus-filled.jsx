import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xflx9c36z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xflx9c36z"/>`,
		"fallback": "reicon:chat-minus-filled",
	});
}

export default Component;
