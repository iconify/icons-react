import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyh_evb1o.css';
import '../../css/l/l2rdcr68w.css';
import '../../css/h/h06aqubhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tyh_evb1o"/><path class="l2rdcr68w"/><path class="h06aqubhh"/></g>`,
		"fallback": "andrsrxn:backpack",
	});
}

export default Component;
