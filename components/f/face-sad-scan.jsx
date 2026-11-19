import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2n5tx6bt.css';
import '../../css/c/ciio1qlct.css';
import '../../css/q/q4mkgkb3p.css';
import '../../css/t/to8hoqxsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e2n5tx6bt"/><path class="ciio1qlct"/><path class="q4mkgkb3p"/><path class="to8hoqxsn"/></g>`,
		"fallback": "andrsrxn:face-sad-scan",
	});
}

export default Component;
