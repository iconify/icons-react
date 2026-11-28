import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pl93pqsjr.css';
import '../../css/b/bfq2rnoum.css';
import '../../css/w/w9x2fes-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pl93pqsjr"/><path class="bfq2rnoum"/><path class="w9x2fes-k"/></g>`,
		"fallback": "iconaut:flower-pot-solid",
	});
}

export default Component;
