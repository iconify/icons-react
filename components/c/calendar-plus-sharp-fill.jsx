import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b3w-c-s0b.css';
import '../../css/b/bsp85jz-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="b3w-c-s0b"/><path class="bsp85jz-y"/></g>`,
		"fallback": "keyline-icons:calendar-plus-sharp-fill",
	});
}

export default Component;
