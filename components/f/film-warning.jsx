import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w69pz5srx.css';
import '../../css/u/u4fiqeo5v.css';
import '../../css/q/qu9fsbcko.css';
import '../../css/k/kj3e78_uc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w69pz5srx"/><path class="u4fiqeo5v"/><path class="qu9fsbcko"/><path class="kj3e78_uc"/></g>`,
		"fallback": "andrsrxn:film-warning",
	});
}

export default Component;
