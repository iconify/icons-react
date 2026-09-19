import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow3gosffm.css';
import '../../css/k/k-945hbkl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ow3gosffm"/><path class="k-945hbkl"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cat-face",
	});
}

export default Component;
