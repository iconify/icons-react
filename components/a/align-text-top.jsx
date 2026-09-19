import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f2x_z7q2l.css';
import '../../css/d/dq1y72c_v.css';
import '../../css/p/p1s-n71xo.css';
import '../../css/d/dtk7ngb6k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f2x_z7q2l"/><path class="dq1y72c_v"/><path class="p1s-n71xo"/><path class="dtk7ngb6k"/></g>`,
		"fallback": "icon-park:align-text-top",
	});
}

export default Component;
