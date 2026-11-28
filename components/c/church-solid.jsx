import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eaqltbloa.css';
import '../../css/a/ae_zt1b-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eaqltbloa"/><path class="ae_zt1b-g"/></g>`,
		"fallback": "iconaut:church-solid",
	});
}

export default Component;
