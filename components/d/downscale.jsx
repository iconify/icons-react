import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rs8t3jbwc.css';
import '../../css/i/iuiu_3all.css';
import '../../css/c/c58p8dfir.css';
import '../../css/k/k2q77bbek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(0 -1 -1 0 11.02 21.26)" class="rs8t3jbwc"/><rect transform="matrix(0 -1 -1 0 11.02 21.26)" class="iuiu_3all"/><path class="c58p8dfir"/><path class="k2q77bbek"/></g>`,
		"fallback": "andrsrxn:downscale",
	});
}

export default Component;
