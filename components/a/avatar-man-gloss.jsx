import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo0engb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qo0engb8s wm-k"/>`,
		"fallback": "withicons:avatar-man-gloss",
	});
}

export default Component;
