import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6s2-kbht.css';
import '../../css/w/w7pwf4p1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6s2-kbht"/><path class="w7pwf4p1h"/></g>`,
		"fallback": "nrk:dot-radiowaves-expressive",
	});
}

export default Component;
