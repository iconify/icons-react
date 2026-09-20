import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e9ivwqbdw.css';
import '../../css/l/liiml2jkt.css';
import '../../css/k/kwotsob1p.css';
import '../../css/g/g_jsg5_1i.css';
import '../../css/v/vsxgtokaa.css';
import '../../css/n/nub0nebyh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e9ivwqbdw"/><path class="liiml2jkt"/><path class="kwotsob1p"/><path class="g_jsg5_1i"/><path class="vsxgtokaa"/><path class="nub0nebyh"/></g>`,
		"fallback": "solar:cloud-rain-outline",
	});
}

export default Component;
