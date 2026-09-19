import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8mndybps.css';
import '../../css/o/otex_rbpk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r8mndybps"/><path class="otex_rbpk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:eleven-oclock",
	});
}

export default Component;
