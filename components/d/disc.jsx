import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p38l2gb7c.css';
import '../../css/o/ojlv26udd.css';
import '../../css/u/um4dfwbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p38l2gb7c"/><path class="ojlv26udd"/><path class="um4dfwbkk"/></g>`,
		"fallback": "andrsrxn:disc",
	});
}

export default Component;
