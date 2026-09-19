import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s22e9fkik.css';
import '../../css/d/dne021b-x.css';
import '../../css/o/omjkpyypr.css';
import '../../css/d/dfm337b_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s22e9fkik"/><path class="dne021b-x"/><path clip-rule="evenodd" class="omjkpyypr"/><path class="dfm337b_v"/></g>`,
		"fallback": "healthicons:emergency-post-outline-24px",
	});
}

export default Component;
