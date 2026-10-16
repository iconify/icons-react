import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v574vi4zp.css';
import '../../css/o/ol9sdh2du.css';
import '../../css/e/e7wgnuy2l.css';
import '../../css/r/rv382h0lt.css';
import '../../css/q/qpngdsblx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v574vi4zp"/><path class="ol9sdh2du"/><path class="e7wgnuy2l"/><path class="rv382h0lt"/><path class="qpngdsblx"/></g>`,
		"fallback": "andrsrxn:cloud-moon",
	});
}

export default Component;
