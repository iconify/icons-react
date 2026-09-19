import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-1pxblas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-1pxblas"/>`,
		"fallback": "ci:arrow-up-left-lg",
	});
}

export default Component;
