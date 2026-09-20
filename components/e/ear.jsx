import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/juinv0b1g.css';
import '../../css/o/o_c9zpg-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="juinv0b1g"/><path class="o_c9zpg-j"/></g>`,
		"fallback": "nrk:ear",
	});
}

export default Component;
