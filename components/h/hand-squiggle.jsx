import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0lo1qd0f.css';
import '../../css/c/cap7-g62h.css';
import '../../css/g/gty3ovqqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e0lo1qd0f"/><path class="cap7-g62h"/><path class="gty3ovqqu"/></g>`,
		"fallback": "andrsrxn:hand-squiggle",
	});
}

export default Component;
