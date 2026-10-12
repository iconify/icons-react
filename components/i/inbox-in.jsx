import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lbwhlb5yv.css';
import '../../css/s/sszze9bkq.css';
import '../../css/l/l8fsz-tov.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lbwhlb5yv"/><path class="sszze9bkq"/><path class="l8fsz-tov"/></g>`,
		"fallback": "andrsrxn:inbox-in",
	});
}

export default Component;
