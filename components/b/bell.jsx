import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/unq2380rk.css';
import '../../css/j/jyi4xtbtc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="unq2380rk"/><path class="jyi4xtbtc"/></g>`,
		"fallback": "majesticons:bell",
	});
}

export default Component;
