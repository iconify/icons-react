import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/od6evsbxr.css';
import '../../css/s/s-ho2qb0i.css';
import '../../css/e/e_2bay6_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="od6evsbxr"/><path class="s-ho2qb0i"/><path class="e_2bay6_a"/></g>`,
		"fallback": "solar:documents-minimalistic-bold",
	});
}

export default Component;
