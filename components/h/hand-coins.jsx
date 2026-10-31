import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gwlupkbfn.css';
import '../../css/f/fflhfwbsk.css';
import '../../css/x/xxc2vccgt.css';
import '../../css/e/escwl7bvv.css';
import '../../css/x/x0jpk6i3y.css';
import '../../css/e/ebuz1ubll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gwlupkbfn wm-shadow"/><path class="fflhfwbsk"/><path class="xxc2vccgt"/><path class="escwl7bvv"/><path class="x0jpk6i3y"/><path class="ebuz1ubll"/></g>`,
		"fallback": "withicons-retro:hand-coins",
	});
}

export default Component;
