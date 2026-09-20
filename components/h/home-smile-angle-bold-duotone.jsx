import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jkkhhsbvd.css';
import '../../css/l/l0-cr_bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jkkhhsbvd"/><path class="l0-cr_bwv"/></g>`,
		"fallback": "solar:home-smile-angle-bold-duotone",
	});
}

export default Component;
