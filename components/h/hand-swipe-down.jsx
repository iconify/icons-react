import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klnuepbag.css';
import '../../css/c/cap7-g62h.css';
import '../../css/o/otreolbpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klnuepbag"/><path class="cap7-g62h"/><path class="otreolbpj"/></g>`,
		"fallback": "andrsrxn:hand-swipe-down",
	});
}

export default Component;
