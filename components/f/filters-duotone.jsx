import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b6vxvox9y.css';
import '../../css/m/mrxlb0n2j.css';
import '../../css/k/k_4uaccxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b6vxvox9y"/><path class="mrxlb0n2j"/><path class="k_4uaccxm"/></g>`,
		"fallback": "reicon:filters-duotone",
	});
}

export default Component;
