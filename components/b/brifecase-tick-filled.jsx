import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/da33mmksw.css';
import '../../css/q/qqzuq1b-l.css';
import '../../css/o/o4qapjxgu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="da33mmksw"/><path class="qqzuq1b-l"/><path class="o4qapjxgu"/></g>`,
		"fallback": "reicon:brifecase-tick-filled",
	});
}

export default Component;
