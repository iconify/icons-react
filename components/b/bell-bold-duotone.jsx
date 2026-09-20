import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m-hi-wsol.css';
import '../../css/q/q2z7a_bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m-hi-wsol"/><path class="q2z7a_bde"/></g>`,
		"fallback": "solar:bell-bold-duotone",
	});
}

export default Component;
