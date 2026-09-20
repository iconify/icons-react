import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnt4fyv0i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pnt4fyv0i"/>`,
		"fallback": "solar:chat-square-check-bold",
	});
}

export default Component;
