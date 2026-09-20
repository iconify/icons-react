import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f589aobdb.css';
import '../../css/i/i278szqpx.css';
import '../../css/y/y-0yi6qaz.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="f589aobdb"/><path clip-rule="evenodd" class="i278szqpx"/><path class="y-0yi6qaz"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:calendar-off",
	});
}

export default Component;
