import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cbe4gqq1v.css';
import '../../css/i/i_j7eob-z.css';
import '../../css/h/hjslqggbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cbe4gqq1v"/><path class="i_j7eob-z"/><path class="hjslqggbs"/></g>`,
		"fallback": "solar:code-2-bold-duotone",
	});
}

export default Component;
