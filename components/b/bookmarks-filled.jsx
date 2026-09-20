import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_r-8ablw.css';
import '../../css/d/dcachkbvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_r-8ablw"/><path class="dcachkbvd"/></g>`,
		"fallback": "reicon:bookmarks-filled",
	});
}

export default Component;
