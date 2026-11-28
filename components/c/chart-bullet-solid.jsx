import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pamw2q9-s.css';
import '../../css/m/md50alb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pamw2q9-s"/><path class="md50alb-p"/></g>`,
		"fallback": "iconaut:chart-bullet-solid",
	});
}

export default Component;
