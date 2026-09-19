import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxm4-pbbs.css';
import '../../css/i/i-x8bcbrr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxm4-pbbs"/><path class="i-x8bcbrr"/></g>`,
		"fallback": "bi:cassette",
	});
}

export default Component;
