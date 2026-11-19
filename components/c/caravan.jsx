import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_kz6n-mp.css';
import '../../css/p/ptj1bc9bv.css';
import '../../css/d/dt7pd7bwt.css';
import '../../css/z/zdd26cb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b_kz6n-mp"/><path clip-rule="evenodd" class="ptj1bc9bv"/><path class="dt7pd7bwt"/><path class="zdd26cb8h"/></g>`,
		"fallback": "andrsrxn:caravan",
	});
}

export default Component;
