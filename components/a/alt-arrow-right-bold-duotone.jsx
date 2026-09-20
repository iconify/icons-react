import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qqm9zmb0y.css';
import '../../css/j/jnvousb1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qqm9zmb0y"/><path class="jnvousb1u"/></g>`,
		"fallback": "solar:alt-arrow-right-bold-duotone",
	});
}

export default Component;
