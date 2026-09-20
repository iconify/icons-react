import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjsovkbka.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wj0sbvbpy.css';
import '../../css/x/xn05bwh0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zjsovkbka"/><g class="mc2zb0bvp"><path class="wj0sbvbpy"/><path class="xn05bwh0o"/></g></g>`,
		"fallback": "solar:buildings-3-bold-duotone",
	});
}

export default Component;
