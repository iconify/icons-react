import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/d6t_ucbpo.css';
import '../../css/d/dlhp9opjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="d6t_ucbpo"/><path class="dlhp9opjy wm-a"/></g>`,
		"fallback": "withicons:clapperboard",
	});
}

export default Component;
