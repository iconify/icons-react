import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/os24rd1in.css';
import '../../css/x/x4dw9lbwa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="os24rd1in"/><path class="x4dw9lbwa"/></g>`,
		"fallback": "andrsrxn:battery-full",
	});
}

export default Component;
