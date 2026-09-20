import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tbli70boo.css';
import '../../css/h/hhkbedc5d.css';
import '../../css/v/vnor8oomw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tbli70boo"/><path class="hhkbedc5d"/><path class="vnor8oomw"/></g>`,
		"fallback": "solar:asteroid-bold",
	});
}

export default Component;
