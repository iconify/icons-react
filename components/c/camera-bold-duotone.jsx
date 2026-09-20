import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mw2j0bfon.css';
import '../../css/c/crk1mub_d.css';
import '../../css/s/shkc45brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mw2j0bfon"/><path class="crk1mub_d"/><path clip-rule="evenodd" class="shkc45brf"/></g>`,
		"fallback": "solar:camera-bold-duotone",
	});
}

export default Component;
