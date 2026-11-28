import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j33-wabpg.css';
import '../../css/k/k4fvszbjt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j33-wabpg"/><path class="k4fvszbjt"/></g>`,
		"fallback": "pullo:envelope-check-duotone",
	});
}

export default Component;
