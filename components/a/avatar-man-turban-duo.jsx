import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/u/u177i40rq.css';
import '../../css/h/hmnowib5p.css';
import '../../css/q/qknbzmc7j.css';
import '../../css/o/ogtxsja6z.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/c/c15h75b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="u177i40rq wm-a"/><path class="hmnowib5p wm-a"/><path class="qknbzmc7j wm-a"/><path class="ogtxsja6z"/><path class="d3y9mw6db"/><path class="c15h75b0m wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban-duo",
	});
}

export default Component;
