import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/waw-1bs3g.css';
import '../../css/q/qb3wmeb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary waw-1bs3g"/><path class="primary qb3wmeb7g"/></g>`,
		"fallback": "iconaut:american-football-duotone",
	});
}

export default Component;
