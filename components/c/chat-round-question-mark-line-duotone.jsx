import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/ho-7xdd0k.css';
import '../../css/z/z37bv-w5d.css';
import '../../css/z/zjtb9sbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ho-7xdd0k"/><path class="z37bv-w5d"/><path class="zjtb9sbmg"/></g>`,
		"fallback": "solar:chat-round-question-mark-line-duotone",
	});
}

export default Component;
