import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukoet6bzt.css';
import '../../css/s/s-hch4pww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ukoet6bzt"/><path class="s-hch4pww"/></g>`,
		"fallback": "reicon:bookmark-square-duotone",
	});
}

export default Component;
