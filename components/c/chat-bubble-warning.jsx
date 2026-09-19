import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc8meib2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc8meib2h"/>`,
		"fallback": "iconoir:chat-bubble-warning",
	});
}

export default Component;
