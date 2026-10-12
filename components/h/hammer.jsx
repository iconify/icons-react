import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bkqp91bjv.css';
import '../../css/m/muvhxc84j.css';
import '../../css/y/yb62kaclv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bkqp91bjv"/><path class="muvhxc84j"/><path class="yb62kaclv"/></g>`,
		"fallback": "andrsrxn:hammer",
	});
}

export default Component;
