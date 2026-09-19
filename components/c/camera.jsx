import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnnorwv9z.css';

const viewBox = {"width":750,"height":770};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnnorwv9z"/>`,
		"fallback": "il:camera",
	});
}

export default Component;
