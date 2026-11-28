import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/p/ph1-1acog.css';
import '../../css/z/zu87p3buw.css';
import '../../css/e/ec9prsbjn.css';
import '../../css/k/klp4rmnfm.css';
import '../../css/q/qsm46wbrb.css';
import '../../css/f/f5-obobic.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="ph1-1acog"/><path class="zu87p3buw"/><path class="ec9prsbjn"/><path class="klp4rmnfm"/><path class="qsm46wbrb"/><path class="f5-obobic"/></g>`,
		"fallback": "iconaut:aperture",
	});
}

export default Component;
