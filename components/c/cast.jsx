import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/izsy3el0p.css';
import '../../css/d/dxgso9_ti.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="izsy3el0p"/><path class="dxgso9_ti"/></g>`,
		"fallback": "bi:cast",
	});
}

export default Component;
