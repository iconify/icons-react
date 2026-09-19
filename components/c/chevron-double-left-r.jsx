import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mod_js00l.css';
import '../../css/k/kok6v3bqe.css';
import '../../css/p/p8t9n2b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mod_js00l"/><path class="kok6v3bqe"/><path clip-rule="evenodd" class="p8t9n2b4x"/></g>`,
		"fallback": "gg:chevron-double-left-r",
	});
}

export default Component;
