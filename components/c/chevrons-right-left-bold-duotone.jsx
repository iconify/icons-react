import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/j/jv2sm3bdr.css';
import '../../css/c/c-2sdjbgw.css';
import '../../css/l/lddbdac-q.css';
import '../../css/c/ceqa4_bdq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="jv2sm3bdr"/><path class="c-2sdjbgw"/></g><path class="lddbdac-q"/><path class="ceqa4_bdq"/></g>`,
		"fallback": "solar:chevrons-right-left-bold-duotone",
	});
}

export default Component;
