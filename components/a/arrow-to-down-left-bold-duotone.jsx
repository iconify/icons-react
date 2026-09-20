import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r5723789x.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/u/ucxixg8jo.css';
import '../../css/r/rl4sfbcqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r5723789x"/><g class="mc2zb0bvp"><path class="ucxixg8jo"/><path class="rl4sfbcqv"/></g></g>`,
		"fallback": "solar:arrow-to-down-left-bold-duotone",
	});
}

export default Component;
