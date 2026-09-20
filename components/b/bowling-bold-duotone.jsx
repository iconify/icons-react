import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yp54sytzi.css';
import '../../css/a/ag72lbciv.css';
import '../../css/s/soqsp2xkn.css';
import '../../css/d/dfe-fimdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yp54sytzi"/><path class="ag72lbciv"/><path class="soqsp2xkn"/><path class="dfe-fimdz"/></g>`,
		"fallback": "solar:bowling-bold-duotone",
	});
}

export default Component;
