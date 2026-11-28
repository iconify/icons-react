import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jsuc-q3of.css';
import '../../css/i/i6g3-645g.css';
import '../../css/c/cpsovz3eo.css';
import '../../css/k/kt398hbaa.css';
import '../../css/y/y5r3abc5i.css';
import '../../css/r/rah1_023a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jsuc-q3of"/><path class="i6g3-645g"/><path class="cpsovz3eo"/><path class="kt398hbaa"/><path class="y5r3abc5i"/><path class="rah1_023a"/></g>`,
		"fallback": "iconaut:git-compare",
	});
}

export default Component;
