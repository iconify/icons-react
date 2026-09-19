import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ked7ylbbf.css';
import '../../css/c/cufblkbzb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ked7ylbbf"/><path class="cufblkbzb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:eagle",
	});
}

export default Component;
