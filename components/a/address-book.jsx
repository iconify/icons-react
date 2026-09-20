import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8v8xo1sf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8v8xo1sf"/>`,
		"fallback": "la:address-book",
	});
}

export default Component;
