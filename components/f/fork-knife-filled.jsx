import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdkcvhpyk.css';
import '../../css/c/cdjwsxbyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gdkcvhpyk"/><path class="cdjwsxbyo"/></g>`,
		"fallback": "reicon:fork-knife-filled",
	});
}

export default Component;
