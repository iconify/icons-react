import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gya71ubxe.css';
import '../../css/z/zevo29beo.css';
import '../../css/f/f4gfhxbgm.css';
import '../../css/l/la3g5ysia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gya71ubxe"/><path class="zevo29beo"/><circle class="f4gfhxbgm"/><circle class="la3g5ysia"/></g>`,
		"fallback": "andrsrxn:coupon",
	});
}

export default Component;
