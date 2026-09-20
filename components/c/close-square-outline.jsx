import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d4q_f2-_g.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d4q_f2-_g"/><path clip-rule="evenodd" class="un073yd9d"/></g>`,
		"fallback": "solar:close-square-outline",
	});
}

export default Component;
