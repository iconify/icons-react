import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj_l62vhd.css';
import '../../css/w/wvt2jtbkd.css';
import '../../css/z/z7pc2ihba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><ellipse class="qj_l62vhd"/><path class="wvt2jtbkd"/><ellipse class="z7pc2ihba"/></g>`,
		"fallback": "andrsrxn:cone",
	});
}

export default Component;
