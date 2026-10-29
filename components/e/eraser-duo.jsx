import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/ggy4urlmh.css';
import '../../css/f/feucwswsf.css';
import '../../css/i/ides4ac0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ggy4urlmh"/><path class="feucwswsf wm-a"/><path class="ides4ac0q"/></g>`,
		"fallback": "withicons:eraser-duo",
	});
}

export default Component;
