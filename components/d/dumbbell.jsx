import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a43ax-bga.css';
import '../../css/r/rmoaf9mhl.css';
import '../../css/c/cbf0mmthl.css';
import '../../css/u/uju5t3m2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a43ax-bga"/><path class="rmoaf9mhl"/><path class="cbf0mmthl"/><path class="uju5t3m2t"/></g>`,
		"fallback": "iconaut:dumbbell",
	});
}

export default Component;
