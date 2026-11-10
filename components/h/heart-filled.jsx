import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmf2d1bxb.css';
import '../../css/d/du6sc6igp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dmf2d1bxb"/><path class="du6sc6igp"/></g>`,
		"fallback": "andrsrxn:heart-filled",
	});
}

export default Component;
