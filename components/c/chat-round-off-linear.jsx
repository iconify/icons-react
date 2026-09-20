import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xh228jcir.css';
import '../../css/o/owkak0bth.css';
import '../../css/i/i54hzebdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xh228jcir"/><path class="owkak0bth"/><path class="i54hzebdm"/></g>`,
		"fallback": "solar:chat-round-off-linear",
	});
}

export default Component;
