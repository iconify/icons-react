import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nqiz7zb-f.css';
import '../../css/l/lsmm45ang.css';
import '../../css/l/lt_f0mcqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nqiz7zb-f"/><path class="lsmm45ang"/><path class="lt_f0mcqd"/></g>`,
		"fallback": "andrsrxn:fire-extinguisher",
	});
}

export default Component;
