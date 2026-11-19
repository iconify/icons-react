import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwt341hlt.css';
import '../../css/x/xf-38duer.css';
import '../../css/n/nt1-fvb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bwt341hlt"/><path class="xf-38duer"/><path class="nt1-fvb7k"/></g>`,
		"fallback": "andrsrxn:field-number",
	});
}

export default Component;
