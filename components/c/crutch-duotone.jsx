import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lv_qlqbyn.css';
import '../../css/m/m2ydi7boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lv_qlqbyn secondary"/><path class="m2ydi7boc primary"/></g>`,
		"fallback": "iconaut:crutch-duotone",
	});
}

export default Component;
