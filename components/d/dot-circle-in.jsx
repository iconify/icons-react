import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g2bmsqbnm.css';
import '../../css/w/wng9gxbpa.css';
import '../../css/m/mo9661y8p.css';
import '../../css/u/ucg8jkbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="g2bmsqbnm"/><path class="wng9gxbpa"/><path class="mo9661y8p"/><path class="ucg8jkbfj"/></g>`,
		"fallback": "andrsrxn:dot-circle-in",
	});
}

export default Component;
