import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tu9zc4bos.css';
import '../../css/x/xzt97hidt.css';
import '../../css/u/u8d4vrbql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tu9zc4bos"/><path class="xzt97hidt"/><path class="u8d4vrbql"/></g>`,
		"fallback": "iconamoon:dislike-duotone",
	});
}

export default Component;
