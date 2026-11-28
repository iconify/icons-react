import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/y/y7ru0bcsy.css';
import '../../css/n/ng4omlguy.css';
import '../../css/w/w50d7q6od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ud95brdct"/><path class="y7ru0bcsy"/><path class="ng4omlguy"/><path class="w50d7q6od"/></g>`,
		"fallback": "iconaut:circle-percent",
	});
}

export default Component;
