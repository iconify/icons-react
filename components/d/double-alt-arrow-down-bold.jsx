import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dj7in60ry.css';
import '../../css/z/zvdh2wdre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dj7in60ry"/><path class="zvdh2wdre"/></g>`,
		"fallback": "solar:double-alt-arrow-down-bold",
	});
}

export default Component;
