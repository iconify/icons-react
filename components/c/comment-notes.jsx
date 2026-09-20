import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w53kg79zh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w53kg79zh"/>`,
		"fallback": "uil:comment-notes",
	});
}

export default Component;
