import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epwrnkb2q.css';
import '../../css/m/mdq-0gxeh.css';
import '../../css/s/sj_0pvbqv.css';
import '../../css/o/o_p-33vzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="epwrnkb2q"/><path class="mdq-0gxeh"/><rect class="sj_0pvbqv"/><path class="o_p-33vzh"/></g>`,
		"fallback": "andrsrxn:gift",
	});
}

export default Component;
