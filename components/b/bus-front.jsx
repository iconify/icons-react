import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thixtc5-x.css';
import '../../css/y/yzhat1b_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thixtc5-x"/><path class="yzhat1b_x"/></g>`,
		"fallback": "andrsrxn:bus-front",
	});
}

export default Component;
