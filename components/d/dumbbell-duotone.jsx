import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4t96qb4u.css';
import '../../css/p/palv_vi_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o4t96qb4u"/><path class="palv_vi_i"/></g>`,
		"fallback": "reicon:dumbbell-duotone",
	});
}

export default Component;
