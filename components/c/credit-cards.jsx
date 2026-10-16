import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ksvxa6cvf.css';
import '../../css/x/x1m55k_fu.css';
import '../../css/d/dvrv5dwsy.css';
import '../../css/z/z28viubrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ksvxa6cvf"/><path class="x1m55k_fu"/><rect class="dvrv5dwsy"/><path class="z28viubrc"/></g>`,
		"fallback": "andrsrxn:credit-cards",
	});
}

export default Component;
