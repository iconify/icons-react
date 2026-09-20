import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s7l_y66fk.css';
import '../../css/f/f0jsc0b6v.css';
import '../../css/r/r2gkxdybh.css';
import '../../css/n/nrmjjwb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s7l_y66fk"/><path class="f0jsc0b6v"/><path class="r2gkxdybh"/><path class="nrmjjwb4y"/></g>`,
		"fallback": "solar:cart-large-minimalistic-bold-duotone",
	});
}

export default Component;
