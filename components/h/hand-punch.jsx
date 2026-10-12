import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t5nd0lbcz.css';
import '../../css/s/slqhyxepq.css';
import '../../css/c/cqe2ncy-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t5nd0lbcz"/><path class="slqhyxepq"/><path class="cqe2ncy-o"/></g>`,
		"fallback": "andrsrxn:hand-punch",
	});
}

export default Component;
