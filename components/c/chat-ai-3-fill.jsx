import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_cx370op.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_cx370op"/>`,
		"fallback": "ri:chat-ai-3-fill",
	});
}

export default Component;
