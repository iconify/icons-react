import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-9xk77xp.css';
import '../../css/k/k8ux7d5dm.css';
import '../../css/y/yocv29bmk.css';
import '../../css/o/oagt_16cc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i-9xk77xp"/><path class="k8ux7d5dm"/><rect class="yocv29bmk"/><path class="oagt_16cc"/></g>`,
		"fallback": "andrsrxn:calendar-star",
	});
}

export default Component;
