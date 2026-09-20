import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u-hxukuvt.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/g__2d8btp.css';
import '../../css/k/k1tpnh3pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u-hxukuvt"/><g class="mc2zb0bvp"><path class="g__2d8btp"/><path class="k1tpnh3pq"/></g></g>`,
		"fallback": "solar:forward-2-bold-duotone",
	});
}

export default Component;
