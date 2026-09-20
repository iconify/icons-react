import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/copc66w9z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="copc66w9z"/>`,
		"fallback": "la:caret-square-down",
	});
}

export default Component;
