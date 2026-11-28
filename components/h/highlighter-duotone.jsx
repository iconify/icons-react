import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rfn4_bbcg.css';
import '../../css/s/szd-glxly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rfn4_bbcg secondary"/><path class="primary szd-glxly"/></g>`,
		"fallback": "iconaut:highlighter-duotone",
	});
}

export default Component;
