import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vio6g0g3e.css';
import '../../css/a/a-cg93bse.css';
import '../../css/m/mci4__bjo.css';
import '../../css/q/qvf7q1z6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="vio6g0g3e"/><path class="a-cg93bse"/><rect class="mci4__bjo"/><path class="qvf7q1z6q"/></g>`,
		"fallback": "andrsrxn:archive",
	});
}

export default Component;
