import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/al21xvbmp.css';
import '../../css/p/p6lr62bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="al21xvbmp"/><path class="p6lr62bxw"/></g>`,
		"fallback": "solar:flame-bold-duotone",
	});
}

export default Component;
