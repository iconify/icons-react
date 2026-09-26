import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dekfbz-3g.css';
import '../../css/x/xojoml2kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dekfbz-3g"/><path class="xojoml2kw"/></g>`,
		"fallback": "solar:arrow-right-from-line-bold",
	});
}

export default Component;
