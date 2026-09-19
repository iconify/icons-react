import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qijp735rw.css';
import '../../css/e/e-2zugory.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qijp735rw"/><path class="e-2zugory"/></g>`,
		"fallback": "bi:envelope-at",
	});
}

export default Component;
