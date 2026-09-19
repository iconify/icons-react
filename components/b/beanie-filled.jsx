import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1b_yxnqh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1b_yxnqh"/>`,
		"fallback": "boxicons:beanie-filled",
	});
}

export default Component;
