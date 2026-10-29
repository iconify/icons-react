import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ides4ac0q.css';
import '../../css/f/feucwswsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ides4ac0q"/><path class="feucwswsf wm-a"/></g>`,
		"fallback": "withicons:eraser",
	});
}

export default Component;
