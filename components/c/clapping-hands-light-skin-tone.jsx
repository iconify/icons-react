import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq1bfqbrr.css';
import '../../css/o/os2ledcod.css';
import '../../css/t/t9ndhq-8g.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/y/ylpeeyb7l.css';
import '../../css/m/m0qis0d3b.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hq1bfqbrr"><path class="os2ledcod"/><path class="t9ndhq-8g"/></g><g class="ij2x_72vy"><path class="ylpeeyb7l"/><path class="m0qis0d3b"/></g>`,
		"fallback": "openmoji:clapping-hands-light-skin-tone",
	});
}

export default Component;
