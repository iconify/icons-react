import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rnuorhbmk.css';
import '../../css/p/ps_jygzin.css';
import '../../css/d/dfat0soba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rnuorhbmk"/><path class="ps_jygzin"/><path clip-rule="evenodd" class="dfat0soba"/></g>`,
		"fallback": "gg:chevron-double-right-o",
	});
}

export default Component;
