import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jjivkrbpv.css';
import '../../css/x/xcez03_th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jjivkrbpv"/><path class="wm-a xcez03_th"/></g>`,
		"fallback": "withicons:cricket",
	});
}

export default Component;
