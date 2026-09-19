import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u7vu07rmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u7vu07rmn"/>`,
		"fallback": "griddy-icons:chat-bubble-alert-filled",
	});
}

export default Component;
