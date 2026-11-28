import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/i/i6g3-645g.css';
import '../../css/x/xfw_f4bet.css';
import '../../css/n/n2o72-b4r.css';
import '../../css/f/fu2lj5bnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jsuc-q3of"/><path class="i6g3-645g"/><path class="xfw_f4bet"/><path class="n2o72-b4r"/><path class="fu2lj5bnw"/></g>`,
		"fallback": "iconaut:git-pull-request",
	});
}

export default Component;
