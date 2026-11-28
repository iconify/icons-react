import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s00n3face.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/l/lcb8obxta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s00n3face secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="lcb8obxta"/></g>`,
		"fallback": "iconaut:circle-three-quarter-duo",
	});
}

export default Component;
