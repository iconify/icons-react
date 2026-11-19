import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djxvyvu-p.css';
import '../../css/k/k9s6mcbcw.css';
import '../../css/m/mwvzbxb8w.css';
import '../../css/g/ggcku44qv.css';
import '../../css/n/nrnc3t1za.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djxvyvu-p"/><path class="k9s6mcbcw"/><circle class="mwvzbxb8w"/><circle class="ggcku44qv"/><path class="nrnc3t1za"/></g>`,
		"fallback": "andrsrxn:evacuate",
	});
}

export default Component;
