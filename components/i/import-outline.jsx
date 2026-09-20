import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g8iz4hb8g.css';
import '../../css/h/hd_d-3tqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g8iz4hb8g"/><path class="hd_d-3tqq"/></g>`,
		"fallback": "solar:import-outline",
	});
}

export default Component;
