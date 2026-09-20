import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgun1xb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgun1xb0e"/>`,
		"fallback": "ri:chat-follow-up-fill",
	});
}

export default Component;
