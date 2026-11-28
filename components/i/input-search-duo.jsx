import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi3hjdhnc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pg4__ow1p.css';
import '../../css/l/lo5g5bc_w.css';
import '../../css/r/rqhxtipmw.css';
import '../../css/t/t7x83a-tg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary yi3hjdhnc"/><g class="dt0cm9dhy primary"><path class="pg4__ow1p"/><path class="lo5g5bc_w"/><path class="rqhxtipmw"/><path class="t7x83a-tg"/></g>`,
		"fallback": "iconaut:input-search-duo",
	});
}

export default Component;
