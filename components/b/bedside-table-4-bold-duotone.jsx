import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/w90nt2dmo.css';
import '../../css/n/nlom9l3_e.css';
import '../../css/i/ibi7dnb2i.css';
import '../../css/d/dfvyt_btx.css';
import '../../css/u/uby_sorqp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="w90nt2dmo"/><path class="nlom9l3_e"/></g><path class="ibi7dnb2i"/><path class="dfvyt_btx"/><path class="uby_sorqp"/></g>`,
		"fallback": "solar:bedside-table-4-bold-duotone",
	});
}

export default Component;
