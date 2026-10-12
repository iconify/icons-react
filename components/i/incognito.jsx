import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/em6kpb3uc.css';
import '../../css/y/yl929_byf.css';
import '../../css/h/hp9jasbsl.css';
import '../../css/g/gs-xrg_pn.css';
import '../../css/v/v641wab9j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle transform="rotate(90 6.69 16.74)" class="em6kpb3uc"/><path class="yl929_byf"/><circle transform="rotate(90 17.23 16.74)" class="hp9jasbsl"/><path class="gs-xrg_pn"/><path class="v641wab9j"/></g>`,
		"fallback": "andrsrxn:incognito",
	});
}

export default Component;
