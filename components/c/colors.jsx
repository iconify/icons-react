import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-2y2gh4p.css';
import '../../css/x/xxx5twb_e.css';
import '../../css/w/wwd0zszgp.css';
import '../../css/j/jx-b8obbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-2y2gh4p"/><path class="xxx5twb_e"/><circle class="wwd0zszgp"/><path class="jx-b8obbp"/></g>`,
		"fallback": "andrsrxn:colors",
	});
}

export default Component;
