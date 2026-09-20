import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mz1_nilbk.css';
import '../../css/y/yrtzldyko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mz1_nilbk"/><path class="yrtzldyko"/></g>`,
		"fallback": "solar:buildings-bold-duotone",
	});
}

export default Component;
