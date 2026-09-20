import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wb-4t5bad.css';
import '../../css/i/i02j309jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wb-4t5bad"/><path class="i02j309jj"/></g>`,
		"fallback": "solar:bookmark-bold-duotone",
	});
}

export default Component;
