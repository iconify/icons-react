import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ycnclbb6k.css';
import '../../css/r/rdo-k_tbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ycnclbb6k"/><path class="rdo-k_tbp"/></g>`,
		"fallback": "nrk:antenna",
	});
}

export default Component;
