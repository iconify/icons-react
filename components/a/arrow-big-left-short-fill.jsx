import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4-1q-b0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4-1q-b0e"/>`,
		"fallback": "keyline-icons:arrow-big-left-short-fill",
	});
}

export default Component;
