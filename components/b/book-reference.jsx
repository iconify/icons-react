import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf5gvfb5e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf5gvfb5e"/>`,
		"fallback": "zondicons:book-reference",
	});
}

export default Component;
