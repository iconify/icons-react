import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxnzn9nmw.css';
import '../../css/j/j3-m1tbbc.css';
import '../../css/a/abx110vzg.css';
import '../../css/x/xjsotyb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxnzn9nmw"/><path class="j3-m1tbbc"/><path class="abx110vzg"/><path class="xjsotyb9a"/></g>`,
		"fallback": "solar:chart-square-bold-duotone",
	});
}

export default Component;
