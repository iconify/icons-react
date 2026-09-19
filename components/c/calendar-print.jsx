import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l0odr6zsw.css';
import '../../css/d/dz_acn-zs.css';
import '../../css/f/f78tv89nt.css';
import '../../css/m/m4m9b5sui.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><rect class="l0odr6zsw"/><path clip-rule="evenodd" class="dz_acn-zs"/><path clip-rule="evenodd" class="f78tv89nt"/><path class="m4m9b5sui"/></g>`,
		"fallback": "pepicons:calendar-print",
	});
}

export default Component;
