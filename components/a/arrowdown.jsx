import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erflbz0dw.css';

const viewBox = {"width":718,"height":690};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erflbz0dw"/>`,
		"fallback": "ls:arrowdown",
	});
}

export default Component;
