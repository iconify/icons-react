import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rch4b20wr.css';
import '../../css/m/mzvx1_v6v.css';
import '../../css/k/ktnm9mblm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="rch4b20wr"/><path class="mzvx1_v6v"/><path class="ktnm9mblm"/></g>`,
		"fallback": "iconaut:gauge-alert",
	});
}

export default Component;
