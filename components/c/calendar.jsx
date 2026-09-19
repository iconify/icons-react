import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4cigqefp.css';
import '../../css/g/g90xr3b4f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u4cigqefp"/><path class="g90xr3b4f"/></g>`,
		"fallback": "at-icons:calendar",
	});
}

export default Component;
