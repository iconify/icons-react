import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8pgfil3p.css';
import '../../css/i/izrdgvbpt.css';
import '../../css/q/qzo-8rbyh.css';
import '../../css/q/qat2bttar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8pgfil3p"/><path class="izrdgvbpt"/><path class="qzo-8rbyh"/><path class="qat2bttar"/></g>`,
		"fallback": "andrsrxn:book-plus",
	});
}

export default Component;
