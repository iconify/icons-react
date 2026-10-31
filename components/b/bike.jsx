import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wqcqzbc1t.css';
import '../../css/d/du3q49l5d.css';
import '../../css/f/ftrl-3bps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow wqcqzbc1t"/><path class="du3q49l5d"/><path class="ftrl-3bps"/></g>`,
		"fallback": "withicons-retro:bike",
	});
}

export default Component;
