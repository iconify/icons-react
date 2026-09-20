import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w35k3sp7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w35k3sp7r"/>`,
		"fallback": "streamline:chat-bubble-oval-smiley-2-remix",
	});
}

export default Component;
