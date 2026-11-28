import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/i/i6g3-645g.css';
import '../../css/x/xfw_f4bet.css';
import '../../css/w/w71r8actk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jsuc-q3of"/><path class="i6g3-645g"/><path class="xfw_f4bet"/><path class="w71r8actk"/></g>`,
		"fallback": "iconaut:git-merge",
	});
}

export default Component;
