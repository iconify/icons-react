import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn8x0ybtd.css';
import '../../css/s/sxeq1hglr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn8x0ybtd"/><path class="sxeq1hglr"/>`,
		"fallback": "streamline-plump:chat-two-bubbles-oval-solid",
	});
}

export default Component;
