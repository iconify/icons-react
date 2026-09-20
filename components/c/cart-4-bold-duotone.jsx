import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i21681b6z.css';
import '../../css/d/d6dberbkk.css';
import '../../css/h/h8pu4qb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i21681b6z"/><path class="d6dberbkk"/><path class="h8pu4qb7d"/></g>`,
		"fallback": "solar:cart-4-bold-duotone",
	});
}

export default Component;
