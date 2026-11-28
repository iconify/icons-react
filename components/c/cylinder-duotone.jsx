import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dj__fjbfr.css';
import '../../css/x/xi62qxbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dj__fjbfr secondary"/><path class="primary xi62qxbsp"/></g>`,
		"fallback": "iconaut:cylinder-duotone",
	});
}

export default Component;
