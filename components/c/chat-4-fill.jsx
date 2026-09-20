import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr_a0tb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr_a0tb3z"/>`,
		"fallback": "ri:chat-4-fill",
	});
}

export default Component;
