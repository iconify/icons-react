import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pvv0wjm6y.css';
import '../../css/v/va_vw-bdu.css';
import '../../css/w/wy9fi2lpj.css';
import '../../css/v/vm3lttbci.css';
import '../../css/w/wxye21bxf.css';
import '../../css/v/vgtab-llh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pvv0wjm6y"/><path class="va_vw-bdu"/><path class="wy9fi2lpj"/><path class="vm3lttbci"/><path class="wxye21bxf"/><path class="vgtab-llh"/></g>`,
		"fallback": "iconaut:bed-bunk",
	});
}

export default Component;
