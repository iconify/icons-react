import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9p1ohbtx.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/l/l0cxmccps.css';
import '../../css/v/vpf4mac0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="h9p1ohbtx"/><g class="mc2zb0bvp"><path class="l0cxmccps"/><path class="vpf4mac0n"/></g></g>`,
		"fallback": "solar:backpack-bold-duotone",
	});
}

export default Component;
