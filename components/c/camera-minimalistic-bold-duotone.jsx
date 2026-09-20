import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erpmo6bnm.css';
import '../../css/x/xvjqgobjy.css';
import '../../css/k/kx3o_bcjy.css';
import '../../css/j/j22c2bb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="erpmo6bnm"/><path clip-rule="evenodd" class="xvjqgobjy"/><path class="kx3o_bcjy"/><path class="j22c2bb7y"/></g>`,
		"fallback": "solar:camera-minimalistic-bold-duotone",
	});
}

export default Component;
