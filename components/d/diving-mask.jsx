import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o873a7buh.css';
import '../../css/a/a7df9abmc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o873a7buh"/><path class="a7df9abmc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:diving-mask",
	});
}

export default Component;
