import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ub3yy3bdw.css';
import '../../css/w/wuztmgkkn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ub3yy3bdw"/><path class="wuztmgkkn"/></g>`,
		"fallback": "bi:database-fill-down",
	});
}

export default Component;
