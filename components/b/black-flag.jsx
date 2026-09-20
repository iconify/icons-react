import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mv6i72hwb.css';
import '../../css/d/dqh0sx9gc.css';
import '../../css/d/dcqdxh5zc.css';
import '../../css/i/i_q9gubdm.css';
import '../../css/u/ur9ub8kkl.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mv6i72hwb"/><path class="dqh0sx9gc"/><g class="dcqdxh5zc"><path class="i_q9gubdm"/><path class="ur9ub8kkl"/></g>`,
		"fallback": "openmoji:black-flag",
	});
}

export default Component;
