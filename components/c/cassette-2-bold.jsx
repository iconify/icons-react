import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-5n86b-i.css';
import '../../css/l/li_x_qb7t.css';
import '../../css/q/q4fuubn3g.css';
import '../../css/f/fpmrqqzwz.css';
import '../../css/y/yjogm03ma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l-5n86b-i"/><path class="li_x_qb7t"/><path class="q4fuubn3g"/><path clip-rule="evenodd" class="fpmrqqzwz"/><path class="yjogm03ma"/></g>`,
		"fallback": "solar:cassette-2-bold",
	});
}

export default Component;
