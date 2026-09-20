import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c8ot_ib-j.css';
import '../../css/w/w_72eacvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c8ot_ib-j"/><path class="w_72eacvw"/></g>`,
		"fallback": "keyline-icons:align-center-sharp-duotone",
	});
}

export default Component;
