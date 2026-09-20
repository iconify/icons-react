import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylsm6d0zn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ylsm6d0zn"/>`,
		"fallback": "reicon:chat-line",
	});
}

export default Component;
