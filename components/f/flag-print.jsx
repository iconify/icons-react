import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t12lt_bso.css';
import '../../css/o/opuctyblu.css';
import '../../css/o/omgkgqbgl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t12lt_bso"/><path clip-rule="evenodd" class="opuctyblu"/><path clip-rule="evenodd" class="omgkgqbgl"/></g>`,
		"fallback": "pepicons:flag-print",
	});
}

export default Component;
