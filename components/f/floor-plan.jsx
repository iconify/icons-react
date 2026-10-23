import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uddlv0s5a.css';
import '../../css/x/xm7pw86ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.38)scale(-1 1)" class="uddlv0s5a"/><path class="xm7pw86ra"/></g>`,
		"fallback": "andrsrxn:floor-plan",
	});
}

export default Component;
