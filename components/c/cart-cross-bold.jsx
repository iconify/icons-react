import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzp1vcbdo.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/r/r7x2ymb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="hzp1vcbdo"/><path class="tgtr_43fx"/><path class="r7x2ymb7x"/></g>`,
		"fallback": "solar:cart-cross-bold",
	});
}

export default Component;
