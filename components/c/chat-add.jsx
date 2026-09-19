import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aej9djb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aej9djb1l"/>`,
		"fallback": "hugeicons:chat-add",
	});
}

export default Component;
