import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fpg8t--hu.css';
import '../../css/m/mc3p6_0qk.css';
import '../../css/h/h-m-98b_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fpg8t--hu"/><path class="mc3p6_0qk"/><path class="h-m-98b_p"/></g>`,
		"fallback": "andrsrxn:cloud-rain-wind",
	});
}

export default Component;
