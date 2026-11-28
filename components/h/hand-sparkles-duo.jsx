import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ah6i-7b1x.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mjyz-pbuf.css';
import '../../css/j/j1qxisssa.css';
import '../../css/j/jzv2cpbts.css';
import '../../css/v/ve59fqbly.css';
import '../../css/y/yto511bre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ah6i-7b1x secondary"/><g class="dt0cm9dhy primary"><path class="mjyz-pbuf"/><path class="j1qxisssa"/><path class="jzv2cpbts"/><path class="ve59fqbly"/><path class="yto511bre"/></g>`,
		"fallback": "iconaut:hand-sparkles-duo",
	});
}

export default Component;
