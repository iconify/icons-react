import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/z3qc_db2n.css';
import '../../css/s/sutgbdv0l.css';
import '../../css/p/pb1ka4bas.css';
import '../../css/i/i_r26abkr.css';
import '../../css/b/bk5cpsbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="z3qc_db2n"/><path class="sutgbdv0l"/><path class="pb1ka4bas"/><path class="i_r26abkr"/><path class="bk5cpsbmm"/></g>`,
		"fallback": "iconoir:drone-take-off",
	});
}

export default Component;
