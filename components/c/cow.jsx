import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iw0zryb9w.css';
import '../../css/x/xc7eyabqc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iw0zryb9w"/><path class="xc7eyabqc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cow",
	});
}

export default Component;
