import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eedfmc7cf.css';
import '../../css/z/zn6maybfa.css';
import '../../css/f/fzmazu3_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eedfmc7cf"/><path class="zn6maybfa"/><path class="fzmazu3_o"/></g>`,
		"fallback": "solar:headphones-square-bold-duotone",
	});
}

export default Component;
