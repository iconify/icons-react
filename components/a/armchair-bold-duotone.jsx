import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lf39ctrie.css';
import '../../css/x/xwcn9wb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lf39ctrie"/><path class="xwcn9wb_y"/></g>`,
		"fallback": "solar:armchair-bold-duotone",
	});
}

export default Component;
