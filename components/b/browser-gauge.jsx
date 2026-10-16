import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vplwyu3il.css';
import '../../css/l/l8fxrac6r.css';
import '../../css/m/m7g_fqbwp.css';
import '../../css/c/chpt85bbl.css';
import '../../css/z/zg-7zwl5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vplwyu3il"/><rect class="l8fxrac6r"/><path class="m7g_fqbwp"/><path class="chpt85bbl"/><path class="zg-7zwl5h"/></g>`,
		"fallback": "andrsrxn:browser-gauge",
	});
}

export default Component;
