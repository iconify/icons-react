import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fptiw0bel.css';
import '../../css/f/fxr683m1b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fptiw0bel"/><path class="fxr683m1b"/></g>`,
		"fallback": "bi:app-indicator",
	});
}

export default Component;
