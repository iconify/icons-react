import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x3kdk36_c.css';
import '../../css/u/u9c58gb_e.css';
import '../../css/x/xgakt6bks.css';
import '../../css/r/r8r4r4bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x3kdk36_c"/><path class="u9c58gb_e"/><path class="xgakt6bks"/><path clip-rule="evenodd" class="r8r4r4bvx"/></g>`,
		"fallback": "solar:home-wi-fi-outline",
	});
}

export default Component;
