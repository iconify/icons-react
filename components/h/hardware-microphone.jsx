import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w1t_iccwe.css';
import '../../css/h/h9ihkhc1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="w1t_iccwe"/><path class="h9ihkhc1x"/></g>`,
		"fallback": "nrk:hardware-microphone",
	});
}

export default Component;
