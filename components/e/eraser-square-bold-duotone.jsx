import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wuose96rb.css';
import '../../css/q/q9a6fyh4c.css';
import '../../css/s/sb_o_47yq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wuose96rb"/><path class="q9a6fyh4c"/><path class="sb_o_47yq"/></g>`,
		"fallback": "solar:eraser-square-bold-duotone",
	});
}

export default Component;
