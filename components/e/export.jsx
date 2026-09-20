import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oi5rq_bvr.css';
import '../../css/x/x2yp2-a7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oi5rq_bvr"/><path class="x2yp2-a7p"/></g>`,
		"fallback": "lets-icons:export",
	});
}

export default Component;
