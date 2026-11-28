import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwbcn59os.css';
import '../../css/o/ok6t0qb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dwbcn59os"/><path class="ok6t0qb1y"/></g>`,
		"fallback": "iconaut:id-badge-solid",
	});
}

export default Component;
