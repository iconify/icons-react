import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahvu5ybfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahvu5ybfm"/>`,
		"fallback": "mdi:chat-help-outline",
	});
}

export default Component;
