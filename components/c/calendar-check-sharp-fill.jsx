import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b3w-c-s0b.css';
import '../../css/d/dt67b79cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="b3w-c-s0b"/><path class="dt67b79cb"/></g>`,
		"fallback": "keyline-icons:calendar-check-sharp-fill",
	});
}

export default Component;
