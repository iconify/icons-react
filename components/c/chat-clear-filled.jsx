import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh8vo1__v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gh8vo1__v"/>`,
		"fallback": "tdesign:chat-clear-filled",
	});
}

export default Component;
