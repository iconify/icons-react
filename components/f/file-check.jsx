import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uym201j0o.css';
import '../../css/r/r-jyjlbkb.css';
import '../../css/w/w6djnbcyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uym201j0o"/><path class="r-jyjlbkb"/><path class="w6djnbcyz"/></g>`,
		"fallback": "andrsrxn:file-check",
	});
}

export default Component;
