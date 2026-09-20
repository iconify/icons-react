import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-uecobhp.css';
import '../../css/k/k2x2kac2g.css';
import '../../css/b/bn2pa0bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u-uecobhp"/><path class="k2x2kac2g"/><path class="bn2pa0bzk"/></g>`,
		"fallback": "solar:cash-out-bold",
	});
}

export default Component;
