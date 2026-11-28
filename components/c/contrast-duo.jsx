import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q60tyqthg.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/x/xo0epvb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q60tyqthg secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="xo0epvb8d"/></g>`,
		"fallback": "iconaut:contrast-duo",
	});
}

export default Component;
