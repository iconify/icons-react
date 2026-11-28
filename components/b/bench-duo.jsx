import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3as-l7om.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x3d4jpbsy.css';
import '../../css/o/ow_tki-5e.css';
import '../../css/j/j9_b_joat.css';
import '../../css/o/oxyxx6b4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3as-l7om secondary"/><g class="dt0cm9dhy primary"><path class="x3d4jpbsy"/><path class="ow_tki-5e"/><path class="j9_b_joat"/><path class="oxyxx6b4a"/></g>`,
		"fallback": "iconaut:bench-duo",
	});
}

export default Component;
