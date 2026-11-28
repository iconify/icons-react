import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkiekkbaq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/f48nptbwr.css';
import '../../css/q/q28vbyb0k.css';
import '../../css/y/yek47efby.css';
import '../../css/r/rd2xrl-rf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkiekkbaq secondary"/><g class="dt0cm9dhy primary"><path class="f48nptbwr"/><path class="q28vbyb0k"/><path class="yek47efby"/><path class="rd2xrl-rf"/></g>`,
		"fallback": "iconaut:ice-cream-duo",
	});
}

export default Component;
