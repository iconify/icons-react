import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qfr20kqki.css';
import '../../css/w/w-5j7-bsb.css';
import '../../css/w/w_8fmvbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qfr20kqki"/><path clip-rule="evenodd" class="w-5j7-bsb"/><path clip-rule="evenodd" class="w_8fmvbbm"/></g>`,
		"fallback": "solar:folder-clock-outline",
	});
}

export default Component;
