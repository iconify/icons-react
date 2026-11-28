import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/huluw3bis.css';
import '../../css/g/gasp1ac_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="huluw3bis secondary"/><path class="gasp1ac_t primary"/></g>`,
		"fallback": "iconaut:bank-duotone",
	});
}

export default Component;
