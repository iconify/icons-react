import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aseq9f6mj.css';
import '../../css/i/ibcxmev1f.css';
import '../../css/g/g_x_43b_u.css';
import '../../css/d/d-i-6xtrt.css';
import '../../css/j/j6jfr6onh.css';
import '../../css/m/mol5oypic.css';
import '../../css/l/llfuwubbz.css';
import '../../css/l/lbrnwbcro.css';
import '../../css/q/qinpu5bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="aseq9f6mj"/><path class="ibcxmev1f wm-a"/><path class="g_x_43b_u"/><path class="d-i-6xtrt wm-a"/><path class="j6jfr6onh wm-a"/><path class="mol5oypic"/><path class="llfuwubbz"/><path class="lbrnwbcro"/><path class="qinpu5bxk wm-a"/></g>`,
		"fallback": "withicons:cable-duo",
	});
}

export default Component;
