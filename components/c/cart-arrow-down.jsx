import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8tbz_byt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8tbz_byt"/>`,
		"fallback": "fa7-solid:cart-arrow-down",
	});
}

export default Component;
