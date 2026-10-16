import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/khzy_gpyd.css';
import '../../css/h/h_48ptbmm.css';
import '../../css/p/pje2yreey.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="khzy_gpyd"/><path class="h_48ptbmm"/><path class="pje2yreey"/></g>`,
		"fallback": "andrsrxn:earbuds-lightning",
	});
}

export default Component;
