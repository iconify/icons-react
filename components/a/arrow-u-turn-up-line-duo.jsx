import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qekp_tbjc.css';
import '../../css/h/h2f_239py.css';
import '../../css/k/kds_0_e_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qekp_tbjc"/><path class="h2f_239py"/><path class="kds_0_e_w"/></g>`,
		"fallback": "iconaut:arrow-u-turn-up-line-duo",
	});
}

export default Component;
