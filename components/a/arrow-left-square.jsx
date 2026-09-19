import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu400dbqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu400dbqv"/>`,
		"fallback": "bi:arrow-left-square",
	});
}

export default Component;
