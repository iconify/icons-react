import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fi1yetb4b.css';
import '../../css/p/pf5q-wlbm.css';
import '../../css/p/p3v9x98ar.css';
import '../../css/j/j-a1kqp-o.css';
import '../../css/p/pxxsney2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fi1yetb4b"/><path class="pf5q-wlbm"/><path class="p3v9x98ar"/><path class="j-a1kqp-o"/><path class="pxxsney2w"/></g>`,
		"fallback": "solar:card-2-line-duotone",
	});
}

export default Component;
