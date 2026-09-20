import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogrovg-la.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ogrovg-la"/>`,
		"fallback": "streamline:chat-bubble-square-block-remix",
	});
}

export default Component;
