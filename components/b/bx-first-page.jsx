import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jpr64obko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jpr64obko"/>`,
		"fallback": "bx:bx-first-page",
	});
}

export default Component;
