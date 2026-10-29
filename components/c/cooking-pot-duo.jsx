import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/maup4pgbk.css';
import '../../css/u/ur45c3t_q.css';
import '../../css/d/dfh5wc6ni.css';
import '../../css/g/genv8y10f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="maup4pgbk"/><path class="ur45c3t_q wm-a"/><path class="dfh5wc6ni"/><path class="genv8y10f wm-a"/></g>`,
		"fallback": "withicons:cooking-pot-duo",
	});
}

export default Component;
