import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o3t99xblo.css';
import '../../css/k/k_gtu_bxt.css';
import '../../css/o/opi2y-bes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o3t99xblo"/><path class="k_gtu_bxt"/><path class="opi2y-bes"/></g>`,
		"fallback": "andrsrxn:chevron-end-circle",
	});
}

export default Component;
