import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbg1ajb0x.css';
import '../../css/f/fvvrj2b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dbg1ajb0x secondary"/><path class="fvvrj2b0h primary"/></g>`,
		"fallback": "iconaut:file-code-duotone",
	});
}

export default Component;
