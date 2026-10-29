import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y3rlqzmys.css';
import '../../css/i/i378c-rig.css';
import '../../css/r/rqaq9tbyz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="y3rlqzmys"/><path class="i378c-rig wm-a"/><path class="rqaq9tbyz wm-s"/></g>`,
		"fallback": "withicons:calendar-clock-solid",
	});
}

export default Component;
