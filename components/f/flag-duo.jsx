import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydvlm2ewb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q379lc5uk.css';
import '../../css/v/vfk79qbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary ydvlm2ewb"/><g class="dt0cm9dhy primary"><path class="q379lc5uk"/><path class="vfk79qbjz"/></g>`,
		"fallback": "iconaut:flag-duo",
	});
}

export default Component;
