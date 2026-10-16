import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh3_x0b2y.css';
import '../../css/n/n2f10gz8u.css';
import '../../css/j/jtubkwccx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kh3_x0b2y"/><path class="n2f10gz8u"/><path class="jtubkwccx"/></g>`,
		"fallback": "andrsrxn:file-jsx",
	});
}

export default Component;
