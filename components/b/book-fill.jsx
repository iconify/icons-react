import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7nap4bge.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7nap4bge"/>`,
		"fallback": "bi:book-fill",
	});
}

export default Component;
