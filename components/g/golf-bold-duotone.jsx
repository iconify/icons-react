import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f2jbpwb_z.css';
import '../../css/e/ecjn8jbey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="f2jbpwb_z"/><path class="ecjn8jbey"/></g>`,
		"fallback": "solar:golf-bold-duotone",
	});
}

export default Component;
