import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j_nutx2xa.css';
import '../../css/g/gkr5rhbkw.css';
import '../../css/y/yorqukb0m.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w6t2ax_st.css';
import '../../css/o/o2fwy1lbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j_nutx2xa"/><path clip-rule="evenodd" class="gkr5rhbkw"/><path clip-rule="evenodd" class="yorqukb0m"/><g class="mc2zb0bvp"><path class="w6t2ax_st"/><path class="o2fwy1lbq"/></g></g>`,
		"fallback": "solar:airbuds-right-bold-duotone",
	});
}

export default Component;
