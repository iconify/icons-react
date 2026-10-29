import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z3cb_j7ez.css';
import '../../css/q/q0z4nob4z.css';
import '../../css/i/ild3phboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z3cb_j7ez"/><path class="q0z4nob4z wm-a"/><path class="ild3phboo"/></g>`,
		"fallback": "withicons:bus",
	});
}

export default Component;
