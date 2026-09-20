import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxef6abwa.css';
import '../../css/m/m9-0_tbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="mxef6abwa"/><path class="m9-0_tbam"/></g>`,
		"fallback": "reicon:hospital-duotone",
	});
}

export default Component;
