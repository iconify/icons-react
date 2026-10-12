import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqc-sacjm.css';
import '../../css/r/rddy1mqff.css';
import '../../css/r/ra2r3_bak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pqc-sacjm"/><path class="rddy1mqff"/><path class="ra2r3_bak"/></g>`,
		"fallback": "andrsrxn:eye-closed",
	});
}

export default Component;
