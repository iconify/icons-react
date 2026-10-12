import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_l0aknxj.css';
import '../../css/s/swzg2cbsx.css';
import '../../css/f/fpkymacnh.css';
import '../../css/c/c_l5apb5c.css';
import '../../css/u/u1_5eacmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_l0aknxj"/><path class="swzg2cbsx"/><path class="fpkymacnh"/><path class="c_l5apb5c"/><path class="u1_5eacmd"/></g>`,
		"fallback": "andrsrxn:hamburger",
	});
}

export default Component;
