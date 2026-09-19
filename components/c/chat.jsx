import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lm511ce7e.css';
import '../../css/t/tzovut_xs.css';
import '../../css/j/j0x6rylzr.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lm511ce7e"/><path class="tzovut_xs"/><path class="j0x6rylzr"/></g>`,
		"fallback": "et:chat",
	});
}

export default Component;
