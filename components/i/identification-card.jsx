import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rzngswuhg.css';
import '../../css/t/tl5mg9_lc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rzngswuhg"/><path class="tl5mg9_lc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:identification-card",
	});
}

export default Component;
