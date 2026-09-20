import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rq39i_b1c.css';
import '../../css/i/if2zmob5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rq39i_b1c"/><path class="if2zmob5d"/></g>`,
		"fallback": "solar:folder-dot-bold-duotone",
	});
}

export default Component;
