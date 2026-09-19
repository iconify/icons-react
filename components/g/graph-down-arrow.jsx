import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q23mtcbsd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q23mtcbsd"/>`,
		"fallback": "bi:graph-down-arrow",
	});
}

export default Component;
