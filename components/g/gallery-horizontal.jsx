import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ed_a27byd.css';
import '../../css/j/j1gjjctqp.css';
import '../../css/f/f5ssvm-gj.css';
import '../../css/p/pj_k-b-5d.css';
import '../../css/l/lh7-y4bjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ed_a27byd wm-deco"/><path class="j1gjjctqp wm-k"/><circle class="f5ssvm-gj wm-a"/><path class="pj_k-b-5d wm-a"/><path class="lh7-y4bjj wm-s"/></g>`,
		"fallback": "withicons-lunar:gallery-horizontal",
	});
}

export default Component;
