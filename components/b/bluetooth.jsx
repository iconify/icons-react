import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x84co2boo.css';
import '../../css/p/p2it8lbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x84co2boo"/><path class="p2it8lbfv"/></g>`,
		"fallback": "andrsrxn:bluetooth",
	});
}

export default Component;
