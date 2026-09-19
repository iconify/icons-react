import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o00zo4bbg.css';
import '../../css/y/yrqnibb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o00zo4bbg"/><path clip-rule="evenodd" class="yrqnibb0f"/></g>`,
		"fallback": "flowbite:font-color-alt-solid",
	});
}

export default Component;
