import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e-6_wy83u.css';
import '../../css/m/myfgyn8nz.css';
import '../../css/c/ceohyg-cf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e-6_wy83u"/><path class="myfgyn8nz"/><path class="ceohyg-cf"/></g>`,
		"fallback": "iconaut:arrow-up-narrow-wide",
	});
}

export default Component;
