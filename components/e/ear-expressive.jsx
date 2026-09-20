import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/ht7q1-r6a.css';
import '../../css/t/tp18wc1bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ht7q1-r6a"/><path class="tp18wc1bm"/></g>`,
		"fallback": "nrk:ear-expressive",
	});
}

export default Component;
