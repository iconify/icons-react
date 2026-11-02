import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f09ud6upv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f09ud6upv"/>`,
		"fallback": "mingcute:book-text-fill",
	});
}

export default Component;
