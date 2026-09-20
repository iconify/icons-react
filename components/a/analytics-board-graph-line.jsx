import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uzrxcz3ph.css';
import '../../css/r/rdkkd29wn.css';
import '../../css/n/nw0p1ubxk.css';
import '../../css/y/ydek3pbkk.css';
import '../../css/f/frma-obdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uzrxcz3ph"/><path class="rdkkd29wn"/><path class="nw0p1ubxk"/><path class="ydek3pbkk"/><path class="frma-obdt"/></g>`,
		"fallback": "streamline-freehand-color:analytics-board-graph-line",
	});
}

export default Component;
