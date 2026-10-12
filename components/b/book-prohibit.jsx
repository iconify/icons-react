import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bs_fncczg.css';
import '../../css/v/vcfe3_bem.css';
import '../../css/u/u22fataed.css';
import '../../css/s/se2ssq-zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bs_fncczg"/><path class="vcfe3_bem"/><circle transform="rotate(90 12 10.12)" class="u22fataed"/><path class="se2ssq-zo"/></g>`,
		"fallback": "andrsrxn:book-prohibit",
	});
}

export default Component;
