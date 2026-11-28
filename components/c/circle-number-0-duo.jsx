import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwy-oybgs.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/x/xvfbro2pc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwy-oybgs secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="xvfbro2pc"/></g>`,
		"fallback": "iconaut:circle-number-0-duo",
	});
}

export default Component;
