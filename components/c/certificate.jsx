import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lcv1-xb-d.css';
import '../../css/e/e3otdnebf.css';
import '../../css/g/gd_88od_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lcv1-xb-d"/><path class="e3otdnebf"/><path class="gd_88od_k"/></g>`,
		"fallback": "andrsrxn:certificate",
	});
}

export default Component;
