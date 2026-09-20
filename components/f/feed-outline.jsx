import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t3lp8cccl.css';
import '../../css/c/cc_c_n2ew.css';
import '../../css/u/uxpvpsbgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t3lp8cccl"/><path class="cc_c_n2ew"/><path clip-rule="evenodd" class="uxpvpsbgs"/></g>`,
		"fallback": "solar:feed-outline",
	});
}

export default Component;
