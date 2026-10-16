import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lpani3d_n.css';
import '../../css/n/n9q-5cb_r.css';
import '../../css/o/oapnr-gja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lpani3d_n"/><path class="n9q-5cb_r"/><path class="oapnr-gja"/></g>`,
		"fallback": "andrsrxn:credit-card-search",
	});
}

export default Component;
