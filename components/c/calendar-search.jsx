import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nq7akpbfi.css';
import '../../css/i/ifivxibrp.css';
import '../../css/w/w6t_tbd_w.css';
import '../../css/b/by0e-dbsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nq7akpbfi"/><rect class="ifivxibrp"/><path class="w6t_tbd_w"/><path class="by0e-dbsn"/></g>`,
		"fallback": "andrsrxn:calendar-search",
	});
}

export default Component;
