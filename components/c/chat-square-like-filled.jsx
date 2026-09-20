import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zu6dr2k5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zu6dr2k5p"/>`,
		"fallback": "reicon:chat-square-like-filled",
	});
}

export default Component;
