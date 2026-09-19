import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-c7k_big.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-c7k_big"/>`,
		"fallback": "charm:cloud",
	});
}

export default Component;
