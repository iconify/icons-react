import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzdp6tnri.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vzdp6tnri"/>`,
		"fallback": "streamline-plump:chat-bubble-square-warning-solid",
	});
}

export default Component;
