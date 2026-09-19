import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kot-p6b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kot-p6b-s"/>`,
		"fallback": "circum:chat-2",
	});
}

export default Component;
