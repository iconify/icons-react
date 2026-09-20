import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgtr_43fx.css';
import '../../css/i/izhbk9bxm.css';
import '../../css/n/nypm9yb6t.css';
import '../../css/i/ihi5mdelv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tgtr_43fx"/><path class="izhbk9bxm"/><path class="nypm9yb6t"/><path class="ihi5mdelv"/></g>`,
		"fallback": "solar:cart-plus-bold-duotone",
	});
}

export default Component;
