import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qu6_npblj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qu6_npblj"/>`,
		"fallback": "ri:chat-smile-ai-fill",
	});
}

export default Component;
