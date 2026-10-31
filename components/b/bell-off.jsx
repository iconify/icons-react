import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/bbz1e6bhf.css';
import '../../css/o/o1a17ub0m.css';
import '../../css/q/q2p6a9boq.css';
import '../../css/y/y0o6npb9i.css';
import '../../css/p/p1b095brh.css';
import '../../css/v/v0eyaibau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="bbz1e6bhf wm-shadow"/><path class="o1a17ub0m"/><path class="q2p6a9boq"/><path class="y0o6npb9i"/><path class="p1b095brh"/><path class="v0eyaibau wm-s"/></g>`,
		"fallback": "withicons-retro:bell-off",
	});
}

export default Component;
