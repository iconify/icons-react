import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahy-3rbsy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahy-3rbsy"/>`,
		"fallback": "subway:duble-corner-arrow-3",
	});
}

export default Component;
