import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lf18tubmv.css';
import '../../css/r/r8nv_4axs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="lf18tubmv"/><path class="r8nv_4axs"/></g>`,
		"fallback": "solar:bookmark-x-line-duotone",
	});
}

export default Component;
