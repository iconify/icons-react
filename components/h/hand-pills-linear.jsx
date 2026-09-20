import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wah-fvb3g.css';
import '../../css/r/r_s45d2gs.css';
import '../../css/u/utnhp4bhf.css';
import '../../css/l/lqpy27syi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wah-fvb3g"/><path class="r_s45d2gs"/><path class="utnhp4bhf"/><rect class="lqpy27syi"/></g>`,
		"fallback": "solar:hand-pills-linear",
	});
}

export default Component;
