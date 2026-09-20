import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tacsdab9k.css';
import '../../css/y/y1zk3ibct.css';
import '../../css/y/yog1qtylw.css';
import '../../css/u/u06hebuej.css';
import '../../css/c/cdulb_b0b.css';
import '../../css/e/e_ag_ub7i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tacsdab9k"/><path class="y1zk3ibct"/><path class="yog1qtylw"/><path class="u06hebuej"/><path class="cdulb_b0b"/><path class="e_ag_ub7i"/></g>`,
		"fallback": "streamline-color:browser-multiple-window",
	});
}

export default Component;
