import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/n/n_vlgcbfo.css';
import '../../css/g/gt238e61k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lx_j5lb4z"/><path class="n_vlgcbfo"/><path class="gt238e61k"/></g>`,
		"fallback": "andrsrxn:clock-time",
	});
}

export default Component;
