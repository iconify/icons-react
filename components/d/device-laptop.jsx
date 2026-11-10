import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w4bdecbwf.css';
import '../../css/w/ws0dnc2dj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w4bdecbwf"/><path class="ws0dnc2dj"/></g>`,
		"fallback": "andrsrxn:device-laptop",
	});
}

export default Component;
