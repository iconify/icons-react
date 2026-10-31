import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xhkkq1b4l.css';
import '../../css/p/pfqig7-ke.css';
import '../../css/s/sbtudlpxf.css';
import '../../css/v/vdw2yf8mj.css';
import '../../css/t/tgvax9bop.css';
import '../../css/k/k7ae-7brq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xhkkq1b4l"/><path class="pfqig7-ke wm-deco"/><path class="sbtudlpxf wm-k"/><path class="vdw2yf8mj wm-shadow"/><path class="tgvax9bop wm-shine"/><path class="k7ae-7brq wm-shine"/></g>`,
		"fallback": "withicons-valentine:football",
	});
}

export default Component;
