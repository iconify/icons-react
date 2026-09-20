import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u057l4lur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u057l4lur"/>`,
		"fallback": "mdi:fungus",
	});
}

export default Component;
