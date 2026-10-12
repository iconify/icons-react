import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0s11ybgw.css';
import '../../css/c/cdzz_zyre.css';
import '../../css/e/e591zr0hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e0s11ybgw"/><path class="cdzz_zyre"/><path class="e591zr0hx"/></g>`,
		"fallback": "andrsrxn:airplane",
	});
}

export default Component;
