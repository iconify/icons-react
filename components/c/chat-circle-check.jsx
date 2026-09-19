import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmum8ru3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmum8ru3s"/>`,
		"fallback": "griddy-icons:chat-circle-check",
	});
}

export default Component;
