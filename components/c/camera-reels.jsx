import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ed0pqxdzw.css';
import '../../css/j/jolt8cvri.css';
import '../../css/i/ilyiwztto.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ed0pqxdzw"/><path class="jolt8cvri"/><path class="ilyiwztto"/></g>`,
		"fallback": "bi:camera-reels",
	});
}

export default Component;
