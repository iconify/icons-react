import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/f/fb8afzb1d.css';
import '../../css/f/fiyxbcjoe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="fb8afzb1d"/><path class="fiyxbcjoe"/></g>`,
		"fallback": "solar:creative-commons-bold-duotone",
	});
}

export default Component;
