import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d3pomkd-u.css';
import '../../css/r/rrj58_bxo.css';
import '../../css/o/oyvc33c_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d3pomkd-u"/><path class="rrj58_bxo"/><path class="oyvc33c_q"/></g>`,
		"fallback": "andrsrxn:device-pc-shield",
	});
}

export default Component;
