import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xc0tnob1v.css';
import '../../css/j/jxh_h4rlc.css';
import '../../css/x/x34umyuqw.css';
import '../../css/m/mr8d_cbya.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="xc0tnob1v"/><path class="jxh_h4rlc"/><path class="wm-a x34umyuqw"/><path class="mr8d_cbya"/></g>`,
		"fallback": "withicons:avatar-fox-duo",
	});
}

export default Component;
