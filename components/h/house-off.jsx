import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/topvl6__i.css';
import '../../css/d/ds79b3bbm.css';
import '../../css/y/y4-j_bb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="topvl6__i"/><path class="ds79b3bbm"/><path class="y4-j_bb1u"/></g>`,
		"fallback": "andrsrxn:house-off",
	});
}

export default Component;
