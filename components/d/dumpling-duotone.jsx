import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xa8q2hbpi.css';
import '../../css/u/u_bx-rxgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary xa8q2hbpi"/><path class="primary u_bx-rxgh"/></g>`,
		"fallback": "iconaut:dumpling-duotone",
	});
}

export default Component;
