import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a55cl3b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a55cl3b0r"/>`,
		"fallback": "ri:chat-history-line",
	});
}

export default Component;
