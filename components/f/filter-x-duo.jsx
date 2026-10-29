import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a35zb6y6e.css';
import '../../css/f/f9b4d59gs.css';
import '../../css/s/s0uk8_bdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="a35zb6y6e"/><path class="f9b4d59gs wm-s"/><path class="s0uk8_bdj"/></g>`,
		"fallback": "withicons:filter-x-duo",
	});
}

export default Component;
