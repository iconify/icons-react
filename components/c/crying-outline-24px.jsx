import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nqk4eswmd.css';
import '../../css/e/enu06gbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nqk4eswmd"/><path class="enu06gbiu"/></g>`,
		"fallback": "healthicons:crying-outline-24px",
	});
}

export default Component;
