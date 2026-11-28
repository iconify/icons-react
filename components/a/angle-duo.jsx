import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv819rkth.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/rg07q9b9f.css';
import '../../css/g/guparg41d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv819rkth secondary"/><g class="dt0cm9dhy primary"><path class="rg07q9b9f"/><path class="guparg41d"/></g>`,
		"fallback": "iconaut:angle-duo",
	});
}

export default Component;
