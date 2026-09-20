import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y61hdrb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y61hdrb2y"/>`,
		"fallback": "ri:heart-pulse-line",
	});
}

export default Component;
