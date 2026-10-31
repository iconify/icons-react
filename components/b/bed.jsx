import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zjj8ytbtl.css';
import '../../css/d/dqialcc1p.css';
import '../../css/u/ug-xyjbav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow zjj8ytbtl"/><path class="dqialcc1p"/><path class="ug-xyjbav"/></g>`,
		"fallback": "withicons-retro:bed",
	});
}

export default Component;
