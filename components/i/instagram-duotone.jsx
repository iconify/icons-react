import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u0mlymb-o.css';
import '../../css/a/aeil7zt6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u0mlymb-o"/><path class="aeil7zt6n primary"/></g>`,
		"fallback": "iconaut:instagram-duotone",
	});
}

export default Component;
