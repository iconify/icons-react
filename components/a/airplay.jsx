import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ckdk7bcxp.css';
import '../../css/b/bhh9xsbsl.css';
import '../../css/u/u_g5_qb-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ckdk7bcxp"/><path class="bhh9xsbsl"/><path class="u_g5_qb-s"/></g>`,
		"fallback": "andrsrxn:airplay",
	});
}

export default Component;
