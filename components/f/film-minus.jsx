import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t3qr8vuik.css';
import '../../css/t/t20lxtilp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t3qr8vuik"/><path class="t20lxtilp"/></g>`,
		"fallback": "andrsrxn:film-minus",
	});
}

export default Component;
