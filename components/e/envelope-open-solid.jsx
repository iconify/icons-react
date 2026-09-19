import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpbhd5njz.css';
import '../../css/r/r4xt-4bjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpbhd5njz"/><path class="r4xt-4bjg"/></g>`,
		"fallback": "heroicons:envelope-open-solid",
	});
}

export default Component;
