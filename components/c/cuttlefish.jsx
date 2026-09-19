import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1u7nbcba.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1u7nbcba"/>`,
		"fallback": "fa7-brands:cuttlefish",
	});
}

export default Component;
