import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk8o7xbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk8o7xbsf"/>`,
		"fallback": "ri:chat-off-fill",
	});
}

export default Component;
