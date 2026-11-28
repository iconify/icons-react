import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cinid7bvt.css';
import '../../css/q/qd8xfzbvu.css';
import '../../css/c/cacmyj2hp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cinid7bvt"/><path class="qd8xfzbvu"/><path class="cacmyj2hp"/></g>`,
		"fallback": "iconaut:crt-monitor",
	});
}

export default Component;
