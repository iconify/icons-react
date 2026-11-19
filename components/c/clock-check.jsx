import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kq_joybgz.css';
import '../../css/q/qkslehbxy.css';
import '../../css/l/lx_j5lb4z.css';
import '../../css/b/bsvkh1bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kq_joybgz"/><path class="qkslehbxy"/><circle class="lx_j5lb4z"/><path class="bsvkh1bgs"/></g>`,
		"fallback": "andrsrxn:clock-check",
	});
}

export default Component;
