import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wm2b4r7sx.css';
import '../../css/x/xkftu1b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm2b4r7sx"/><path class="xkftu1b5q"/></g>`,
		"fallback": "andrsrxn:box",
	});
}

export default Component;
