import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jh5nocbzb.css';
import '../../css/g/g1p3n-bzh.css';
import '../../css/d/d2h7x8bev.css';
import '../../css/i/ibzfanbqt.css';
import '../../css/g/gmutfhb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jh5nocbzb wm-deco"/><path class="g1p3n-bzh wm-deco"/><path class="d2h7x8bev wm-deco"/><path class="ibzfanbqt"/><path class="gmutfhb1q"/></g>`,
		"fallback": "withicons:hand-blueprint",
	});
}

export default Component;
