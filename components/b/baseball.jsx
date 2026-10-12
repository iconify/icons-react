import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g-l5gq24p.css';
import '../../css/n/n6wtlaclb.css';
import '../../css/u/uyjidpbdl.css';
import '../../css/w/wpjxko2-y.css';
import '../../css/f/frvpykb4a.css';
import '../../css/z/z3ynfub1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g-l5gq24p"/><path class="n6wtlaclb"/><circle class="uyjidpbdl"/><path class="wpjxko2-y"/><circle class="frvpykb4a"/><path class="z3ynfub1e"/></g>`,
		"fallback": "andrsrxn:baseball",
	});
}

export default Component;
