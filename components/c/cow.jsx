import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gw643cchk.css';
import '../../css/n/n_u25m8gi.css';
import '../../css/f/f9o3lzbiz.css';
import '../../css/e/ekheec4yg.css';
import '../../css/s/sa3tg7_no.css';
import '../../css/j/jeg55pf0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gw643cchk"/><path class="n_u25m8gi"/><path class="f9o3lzbiz"/><path class="ekheec4yg"/><path class="sa3tg7_no"/><path class="jeg55pf0w"/></g>`,
		"fallback": "iconaut:cow",
	});
}

export default Component;
