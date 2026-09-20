import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/o/obx-q6w6p.css';
import '../../css/l/l0dgq74pp.css';
import '../../css/g/gh0pyjbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="obx-q6w6p"/><path class="l0dgq74pp"/></g><path clip-rule="evenodd" class="gh0pyjbft"/></g>`,
		"fallback": "solar:flip-horizontal-bold-duotone",
	});
}

export default Component;
