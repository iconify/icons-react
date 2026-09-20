import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lp-vx44ck.css';
import '../../css/j/jj9sgub3y.css';
import '../../css/s/sn70fibvm.css';
import '../../css/r/rldmr4bdt.css';
import '../../css/z/zpnbjy47f.css';
import '../../css/v/v7xtrdgds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lp-vx44ck"/><path class="jj9sgub3y"/><path class="sn70fibvm"/><path class="rldmr4bdt"/><path class="zpnbjy47f"/><path class="v7xtrdgds"/></g>`,
		"fallback": "solar:documents-broken",
	});
}

export default Component;
