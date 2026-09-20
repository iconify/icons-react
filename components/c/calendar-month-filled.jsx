import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rmq73q8fs.css';
import '../../css/o/olnv4zb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rmq73q8fs"/><path class="olnv4zb1i"/></g>`,
		"fallback": "tabler:calendar-month-filled",
	});
}

export default Component;
