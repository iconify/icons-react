import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fh6_i-49h.css';
import '../../css/i/irxb9mb4y.css';
import '../../css/p/p3p_7xbhq.css';
import '../../css/i/ijh_wmb2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fh6_i-49h"/><path class="irxb9mb4y"/><path class="p3p_7xbhq"/><path class="ijh_wmb2b"/></g>`,
		"fallback": "andrsrxn:ice",
	});
}

export default Component;
