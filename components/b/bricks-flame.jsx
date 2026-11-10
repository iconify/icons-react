import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4k4gtbtk.css';
import '../../css/b/bne3dkbdq.css';
import '../../css/l/l64rzsblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b4k4gtbtk"/><path class="bne3dkbdq"/><path class="l64rzsblb"/></g>`,
		"fallback": "andrsrxn:bricks-flame",
	});
}

export default Component;
