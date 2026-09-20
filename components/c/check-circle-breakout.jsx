import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oi1a1sp6f.css';
import '../../css/o/o_rvbrbym.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oi1a1sp6f"/><path class="o_rvbrbym"/></g>`,
		"fallback": "rivet-icons:check-circle-breakout",
	});
}

export default Component;
