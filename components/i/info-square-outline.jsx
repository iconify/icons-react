import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ik6x-m28o.css';
import '../../css/a/aw-y6obss.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ik6x-m28o"/><path class="aw-y6obss"/><path clip-rule="evenodd" class="un073yd9d"/></g>`,
		"fallback": "solar:info-square-outline",
	});
}

export default Component;
