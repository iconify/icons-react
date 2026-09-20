import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p6o4tba2o.css';
import '../../css/f/fvoj6rvkh.css';
import '../../css/i/iy-tl4g0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p6o4tba2o"/><path class="fvoj6rvkh"/><path class="iy-tl4g0l"/></g>`,
		"fallback": "reicon:cup-paper-duotone",
	});
}

export default Component;
