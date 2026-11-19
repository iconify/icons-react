import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j2ok04bln.css';
import '../../css/r/ru78nubsm.css';
import '../../css/m/mfsv27bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j2ok04bln"/><path clip-rule="evenodd" class="ru78nubsm"/><path class="mfsv27bjt"/></g>`,
		"fallback": "andrsrxn:chart-mode",
	});
}

export default Component;
