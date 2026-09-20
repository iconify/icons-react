import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/ssoy8o_wu.css';
import '../../css/w/wj6b-6x4m.css';
import '../../css/n/ncpijfb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ssoy8o_wu"/><path class="wj6b-6x4m"/><path class="ncpijfb-m"/></g>`,
		"fallback": "solar:box-minimalistic-bold-duotone",
	});
}

export default Component;
