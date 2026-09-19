import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgrtvpd0k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hgrtvpd0k"/>`,
		"fallback": "heroicons-solid:chat-bubble-left-ellipsis",
	});
}

export default Component;
