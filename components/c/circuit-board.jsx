import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8kv0bbww.css';
import '../../css/g/ga5jofbwl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8kv0bbww"/><path class="ga5jofbwl"/></g>`,
		"fallback": "at-icons:circuit-board",
	});
}

export default Component;
