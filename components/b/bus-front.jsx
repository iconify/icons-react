import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyzlnrz5l.css';
import '../../css/d/ds-wa0npy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tyzlnrz5l"/><path class="ds-wa0npy"/></g>`,
		"fallback": "bi:bus-front",
	});
}

export default Component;
