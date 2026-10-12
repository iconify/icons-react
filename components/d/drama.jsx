import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/su023lbew.css';
import '../../css/j/jc7o1cb2w.css';
import '../../css/w/wb34gcb-f.css';
import '../../css/o/o0s58ibrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="su023lbew"/><path class="jc7o1cb2w"/><path class="wb34gcb-f"/><path class="o0s58ibrc"/></g>`,
		"fallback": "andrsrxn:drama",
	});
}

export default Component;
