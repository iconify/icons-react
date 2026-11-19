import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dxj6r9b1t.css';
import '../../css/f/fezn0l-if.css';
import '../../css/w/wvx440bsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dxj6r9b1t"/><path class="fezn0l-if"/><path class="wvx440bsm"/></g>`,
		"fallback": "andrsrxn:box-lock",
	});
}

export default Component;
