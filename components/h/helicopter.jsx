import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nffkr1bsa.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nffkr1bsa"/>`,
		"fallback": "fa7-solid:helicopter",
	});
}

export default Component;
