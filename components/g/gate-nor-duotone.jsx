import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m2rzbdbai.css';
import '../../css/r/r51vjjb1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m2rzbdbai secondary"/><path class="primary r51vjjb1h"/></g>`,
		"fallback": "iconaut:gate-nor-duotone",
	});
}

export default Component;
