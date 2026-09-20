import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/trld4f-xq.css';
import '../../css/q/qtq-_nhoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="trld4f-xq"/><path clip-rule="evenodd" class="qtq-_nhoh"/></g>`,
		"fallback": "reicon:calendar-mark-filled",
	});
}

export default Component;
