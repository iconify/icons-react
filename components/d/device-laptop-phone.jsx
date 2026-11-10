import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_xty2n5b.css';
import '../../css/h/h50z_7muy.css';
import '../../css/c/cdyn3ccjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x_xty2n5b"/><path class="h50z_7muy"/><path class="cdyn3ccjz"/></g>`,
		"fallback": "andrsrxn:device-laptop-phone",
	});
}

export default Component;
