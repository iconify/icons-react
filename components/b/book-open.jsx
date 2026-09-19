import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2568zb4b.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2568zb4b"/>`,
		"fallback": "fa7-solid:book-open",
	});
}

export default Component;
