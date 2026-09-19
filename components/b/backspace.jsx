import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e-ihbiu8t.css';
import '../../css/m/mxov3ediw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e-ihbiu8t"/><path class="mxov3ediw"/></g>`,
		"fallback": "bi:backspace",
	});
}

export default Component;
