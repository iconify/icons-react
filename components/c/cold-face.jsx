import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xf_f8siqb.css';
import '../../css/t/th7uvobbr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xf_f8siqb"/><path class="th7uvobbr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cold-face",
	});
}

export default Component;
