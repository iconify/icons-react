import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u5a2djb9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u5a2djb9w"/>`,
		"fallback": "ri:chat-2-line",
	});
}

export default Component;
