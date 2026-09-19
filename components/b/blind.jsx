import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ym7o_3bag.css';
import '../../css/z/zexrpbczl.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="ym7o_3bag"/><path class="zexrpbczl"/></g>`,
		"fallback": "foundation:blind",
	});
}

export default Component;
