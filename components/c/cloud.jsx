import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqfnu818z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqfnu818z"/>`,
		"fallback": "la:cloud",
	});
}

export default Component;
