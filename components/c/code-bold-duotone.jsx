import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvnty7bzi.css';
import '../../css/f/fjuczkess.css';
import '../../css/a/acwtkzbkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvnty7bzi"/><path class="fjuczkess"/><path class="acwtkzbkh"/></g>`,
		"fallback": "solar:code-bold-duotone",
	});
}

export default Component;
