import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdowv-q2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qdowv-q2r"/>`,
		"fallback": "heroicons:chat-bubble-bottom-center-solid",
	});
}

export default Component;
