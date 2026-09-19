import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/numz40fvh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="numz40fvh"/>`,
		"fallback": "bi:arrow-right-square-fill",
	});
}

export default Component;
