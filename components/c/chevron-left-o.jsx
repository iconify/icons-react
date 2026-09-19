import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5xocbbkg.css';
import '../../css/p/p34xh_bzm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5xocbbkg"/><path clip-rule="evenodd" class="p34xh_bzm"/></g>`,
		"fallback": "gg:chevron-left-o",
	});
}

export default Component;
