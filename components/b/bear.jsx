import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uf9mrilrg.css';
import '../../css/h/hjfln3bdh.css';
import '../../css/x/x61oj130z.css';
import '../../css/n/n4db_ib3a.css';
import '../../css/a/a_luiabyy.css';
import '../../css/y/y9seu5btc.css';
import '../../css/e/e52-97bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uf9mrilrg"/><path class="hjfln3bdh"/><path class="x61oj130z"/><path class="n4db_ib3a"/><path class="a_luiabyy"/><path class="y9seu5btc"/><path class="e52-97bmc"/></g>`,
		"fallback": "iconaut:bear",
	});
}

export default Component;
