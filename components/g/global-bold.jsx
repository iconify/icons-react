import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mksjtpbtr.css';
import '../../css/y/yv_l9cb1h.css';
import '../../css/e/e_l-ej8iy.css';
import '../../css/n/n1871xgqc.css';
import '../../css/d/dk16v8bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mksjtpbtr"/><path class="yv_l9cb1h"/><path class="e_l-ej8iy"/><path class="n1871xgqc"/><path class="dk16v8bmc"/></g>`,
		"fallback": "solar:global-bold",
	});
}

export default Component;
