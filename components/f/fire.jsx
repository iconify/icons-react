import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uarttq_sz.css';
import '../../css/f/fcgkxwx4v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uarttq_sz"/><path class="fcgkxwx4v"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fire",
	});
}

export default Component;
