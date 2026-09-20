import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xte30hbrs.css';
import '../../css/u/ufcvxubwa.css';
import '../../css/d/dogmykb7z.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/t/t0_5lgbdo.css';
import '../../css/n/nmse1bcme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xte30hbrs"/><path class="ufcvxubwa"/><path class="dogmykb7z"/><g class="mc2zb0bvp"><path class="t0_5lgbdo"/><path class="nmse1bcme"/></g></g>`,
		"fallback": "solar:incognito-bold-duotone",
	});
}

export default Component;
