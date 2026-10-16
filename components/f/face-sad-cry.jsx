import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bfkn_4b6h.css';
import '../../css/m/mu4wpeqdb.css';
import '../../css/l/li_if2vdt.css';
import '../../css/f/fxywgc1jr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bfkn_4b6h"/><path class="mu4wpeqdb"/><path class="li_if2vdt"/><path class="fxywgc1jr"/></g>`,
		"fallback": "andrsrxn:face-sad-cry",
	});
}

export default Component;
