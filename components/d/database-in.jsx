import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pd3w4vb1f.css';
import '../../css/e/e2jdhubcm.css';
import '../../css/j/jiu158igz.css';
import '../../css/t/t08ghmz3g.css';
import '../../css/e/e74yrmbzr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="pd3w4vb1f"/><path class="e2jdhubcm"/><ellipse class="jiu158igz"/><path class="t08ghmz3g"/><path class="e74yrmbzr"/></g>`,
		"fallback": "andrsrxn:database-in",
	});
}

export default Component;
