import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/b3w-c-s0b.css';
import '../../css/o/o70mxzb3u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="b3w-c-s0b"/><path class="o70mxzb3u"/></g>`,
		"fallback": "keyline-icons:calendar-x-sharp-fill",
	});
}

export default Component;
