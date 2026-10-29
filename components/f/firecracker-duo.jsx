import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/e4tqlvtml.css';
import '../../css/o/ocqlkk5_u.css';
import '../../css/f/fmp-5vctz.css';
import '../../css/m/m9kc8fbca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="e4tqlvtml"/><path class="ocqlkk5_u wm-a"/><path class="fmp-5vctz"/><path class="m9kc8fbca"/></g>`,
		"fallback": "withicons:firecracker-duo",
	});
}

export default Component;
