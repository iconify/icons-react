import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mcjr5lbzi.css';
import '../../css/b/b274qobzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mcjr5lbzi"/><path class="b274qobzq"/></g>`,
		"fallback": "gg:corner-double-left-up",
	});
}

export default Component;
