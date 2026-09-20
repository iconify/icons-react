import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p_jr1hblm.css';
import '../../css/r/rupwcvb5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p_jr1hblm"/><path clip-rule="evenodd" class="rupwcvb5o"/></g>`,
		"fallback": "solar:exit-bold-duotone",
	});
}

export default Component;
