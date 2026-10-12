import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4o7xmq6o.css';
import '../../css/m/m18t9iq3g.css';
import '../../css/h/hvwaqccxr.css';
import '../../css/q/qs52gjbsc.css';
import '../../css/p/ptedosd7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="f4o7xmq6o"/><circle transform="matrix(0 1 1 0 6.82 7.72)" class="m18t9iq3g"/><rect class="hvwaqccxr"/><path class="qs52gjbsc"/><path class="ptedosd7f"/></g>`,
		"fallback": "andrsrxn:contacts",
	});
}

export default Component;
