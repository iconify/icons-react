import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hcm6ofbcf.css';
import '../../css/k/kisbpybjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hcm6ofbcf"/><path class="kisbpybjg"/></g>`,
		"fallback": "solar:dialog-bold-duotone",
	});
}

export default Component;
