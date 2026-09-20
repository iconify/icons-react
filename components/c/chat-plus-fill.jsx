import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bcb6e5lgd.css';
import '../../css/v/vk8rno99b.css';
import '../../css/o/oyqkr867s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bcb6e5lgd"/><path clip-rule="evenodd" class="vk8rno99b"/><path class="oyqkr867s"/></g>`,
		"fallback": "lets-icons:chat-plus-fill",
	});
}

export default Component;
