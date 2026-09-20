import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqvbu0a8e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqvbu0a8e"/>`,
		"fallback": "streamline:chat-bubble-oval",
	});
}

export default Component;
