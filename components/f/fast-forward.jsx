import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o32on-b4u.css';
import '../../css/h/hx5d21bdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o32on-b4u wm-a"/><path class="hx5d21bdd"/></g>`,
		"fallback": "withicons:fast-forward",
	});
}

export default Component;
