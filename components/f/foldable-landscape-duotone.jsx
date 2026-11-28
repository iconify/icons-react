import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o63nzoodi.css';
import '../../css/p/p-0ej7_va.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o63nzoodi secondary"/><path class="p-0ej7_va primary"/></g>`,
		"fallback": "iconaut:foldable-landscape-duotone",
	});
}

export default Component;
