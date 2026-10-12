import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/topvl6__i.css';
import '../../css/i/iskl3g_ta.css';
import '../../css/r/ri-2wptou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="topvl6__i"/><path class="iskl3g_ta"/><path class="ri-2wptou"/></g>`,
		"fallback": "andrsrxn:house",
	});
}

export default Component;
