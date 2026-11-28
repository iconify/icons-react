import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lxp_pxb9n.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/z/z0iw1obqm.css';
import '../../css/d/d5l4gdc1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lxp_pxb9n secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="z0iw1obqm"/><path class="d5l4gdc1u"/></g>`,
		"fallback": "iconaut:bagel-duo",
	});
}

export default Component;
