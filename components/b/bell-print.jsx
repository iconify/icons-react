import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l_29t6_8t.css';
import '../../css/r/rys3lkbnk.css';
import '../../css/s/s5pzo9x7j.css';
import '../../css/m/m90j_eaof.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l_29t6_8t"/><path class="rys3lkbnk"/><path clip-rule="evenodd" class="s5pzo9x7j"/><path class="m90j_eaof"/></g>`,
		"fallback": "pepicons:bell-print",
	});
}

export default Component;
