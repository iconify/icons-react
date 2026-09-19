import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-w8v3b3p.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-w8v3b3p"/>`,
		"fallback": "fa7-brands:goodreads",
	});
}

export default Component;
