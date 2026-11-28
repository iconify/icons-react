import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy3h6jb1a.css';
import '../../css/e/efqr4g_af.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cy3h6jb1a"/><path class="efqr4g_af"/></g>`,
		"fallback": "iconaut:area-chart-solid",
	});
}

export default Component;
