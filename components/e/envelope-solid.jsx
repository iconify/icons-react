import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jszii1blr.css';
import '../../css/z/zyf4eobvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jszii1blr"/><path class="zyf4eobvz"/></g>`,
		"fallback": "flowbite:envelope-solid",
	});
}

export default Component;
