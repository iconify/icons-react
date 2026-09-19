import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7au5xbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c7au5xbuk"/>`,
		"fallback": "heroicons:chat-bubble-oval-left-solid",
	});
}

export default Component;
