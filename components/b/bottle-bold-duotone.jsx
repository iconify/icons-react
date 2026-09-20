import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z04moyb-c.css';
import '../../css/p/p6fry9bte.css';
import '../../css/w/wuxak0bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z04moyb-c"/><path class="p6fry9bte"/><path class="wuxak0bwi"/></g>`,
		"fallback": "solar:bottle-bold-duotone",
	});
}

export default Component;
