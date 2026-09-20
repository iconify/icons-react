import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ad18bob7g.css';
import '../../css/m/m9qlfhbai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ad18bob7g"/><path clip-rule="evenodd" class="m9qlfhbai"/></g>`,
		"fallback": "reicon:calendar-x",
	});
}

export default Component;
