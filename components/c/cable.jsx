import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/k/ke9wffmav.css';
import '../../css/d/dr5ltpb6s.css';
import '../../css/q/qx_x0ac8s.css';
import '../../css/b/bz1c17bfk.css';
import '../../css/c/c9r91ziyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="ke9wffmav wm-shadow"/><path class="dr5ltpb6s wm-shadow"/><path class="qx_x0ac8s"/><path class="bz1c17bfk"/><path class="c9r91ziyz"/></g>`,
		"fallback": "withicons-brutal:cable",
	});
}

export default Component;
