import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g0lcr1bjn.css';
import '../../css/t/t46mbacuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g0lcr1bjn"/><path class="t46mbacuc"/></g>`,
		"fallback": "solar:bar-chair-bold-duotone",
	});
}

export default Component;
