import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u22fataed.css';
import '../../css/s/se2ssq-zo.css';
import '../../css/z/zen7gwbnt.css';
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
		"content": `<g class="ft5dv1b6b"><circle class="u22fataed"/><path class="se2ssq-zo"/><path clip-rule="evenodd" class="zen7gwbnt"/><path class="qzo-8rbyh"/><path class="qat2bttar"/></g>`,
		"fallback": "andrsrxn:book-prohibit",
	});
}

export default Component;
