import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o6cb9_bxf.css';
import '../../css/s/siz28rbxw.css';
import '../../css/l/lx85-ac0b.css';
import '../../css/c/c2ccr1cfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o6cb9_bxf"/><path class="siz28rbxw"/><path class="lx85-ac0b"/><path class="c2ccr1cfe"/></g>`,
		"fallback": "solar:armchair-broken",
	});
}

export default Component;
