import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gkp0p4mnz.css';
import '../../css/x/xzckufbpo.css';
import '../../css/h/h4po3bbim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gkp0p4mnz"/><path class="xzckufbpo"/><path class="h4po3bbim"/></g>`,
		"fallback": "iconaut:cloud-moon-rain",
	});
}

export default Component;
