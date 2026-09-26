import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivmut4bpl.css';
import '../../css/s/s_ii8ub9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ivmut4bpl"/><path class="s_ii8ub9z"/></g>`,
		"fallback": "solar:arrow-down-from-line-bold-duotone",
	});
}

export default Component;
