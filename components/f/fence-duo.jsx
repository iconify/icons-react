import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qsfhl0jvb.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jhkfuibgv.css';
import '../../css/u/uz83tsgot.css';
import '../../css/p/phulogq2g.css';
import '../../css/j/jyhls43lm.css';
import '../../css/h/h1cpv9bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qsfhl0jvb secondary"/><g class="dt0cm9dhy primary"><path class="jhkfuibgv"/><path class="uz83tsgot"/><path class="phulogq2g"/><path class="jyhls43lm"/><path class="h1cpv9bly"/></g>`,
		"fallback": "iconaut:fence-duo",
	});
}

export default Component;
