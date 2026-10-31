import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inhk1yb5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inhk1yb5i"/>`,
		"fallback": "coolicons:chat-heart-fill-round",
	});
}

export default Component;
