import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/odircabyp.css';
import '../../css/e/ec_qsfszq.css';
import '../../css/w/w5p5w4_bh.css';
import '../../css/r/rw7ssw4fj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="odircabyp"/><path class="ec_qsfszq"/><path class="w5p5w4_bh"/><path class="rw7ssw4fj"/></g>`,
		"fallback": "andrsrxn:face-filter",
	});
}

export default Component;
