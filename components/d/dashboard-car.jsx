import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/el44v1bwo.css';
import '../../css/q/qpxvacb1j.css';
import '../../css/o/o0ce453zk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="el44v1bwo"/><path class="qpxvacb1j"/><path clip-rule="evenodd" class="o0ce453zk"/></g>`,
		"fallback": "icon-park:dashboard-car",
	});
}

export default Component;
