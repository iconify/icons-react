import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y6-zcxe7g.css';
import '../../css/w/wtid59b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y6-zcxe7g"/><path class="wtid59b2h"/></g>`,
		"fallback": "andrsrxn:box-out",
	});
}

export default Component;
