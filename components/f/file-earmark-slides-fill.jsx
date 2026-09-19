import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mypvyfvum.css';
import '../../css/f/fu5vs1b4k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mypvyfvum"/><path class="fu5vs1b4k"/></g>`,
		"fallback": "bi:file-earmark-slides-fill",
	});
}

export default Component;
