import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eheqshbap.css';
import '../../css/l/lbkzxwwal.css';
import '../../css/f/fgg1dpb1y.css';
import '../../css/s/s7cx_pbcn.css';
import '../../css/e/e06he2b9j.css';
import '../../css/t/tyu1wy6bm.css';
import '../../css/c/ctpju6bji.css';
import '../../css/j/jjk_8ebes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eheqshbap"/><path class="lbkzxwwal"/><path class="fgg1dpb1y"/><path class="s7cx_pbcn"/><path class="e06he2b9j"/><path class="tyu1wy6bm"/><path class="ctpju6bji"/><path class="jjk_8ebes"/>`,
		"fallback": "solar:facemask-square-bold-duotone",
	});
}

export default Component;
