import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpun8dbkf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j_djel1ti.css';
import '../../css/v/v7c-qfpma.css';
import '../../css/q/qf2cg9bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary tpun8dbkf"/><g class="dt0cm9dhy primary"><path class="j_djel1ti"/><path class="v7c-qfpma"/><path class="qf2cg9bxk"/></g>`,
		"fallback": "iconaut:feather-duo",
	});
}

export default Component;
