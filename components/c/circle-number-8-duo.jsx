import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkb8-1b0p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/a/a6e-3_biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkb8-1b0p secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="a6e-3_biw"/></g>`,
		"fallback": "iconaut:circle-number-8-duo",
	});
}

export default Component;
