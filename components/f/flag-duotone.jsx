import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dnk0uhbht.css';
import '../../css/b/bfxagfbej.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dnk0uhbht secondary"/><path class="bfxagfbej primary"/></g>`,
		"fallback": "iconaut:flag-duotone",
	});
}

export default Component;
