import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mksjtpbtr.css';
import '../../css/n/n1871xgqc.css';
import '../../css/d/dk16v8bmc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/y/yi3ch5l1y.css';
import '../../css/f/ffpjbp9ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mksjtpbtr"/><path class="n1871xgqc"/><path class="dk16v8bmc"/><g class="mc2zb0bvp"><path class="yi3ch5l1y"/><path class="ffpjbp9ku"/></g></g>`,
		"fallback": "solar:global-bold-duotone",
	});
}

export default Component;
