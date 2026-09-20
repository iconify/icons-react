import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to8tv_bdi.css';
import '../../css/p/palodkbln.css';
import '../../css/z/zmgop4_qn.css';
import '../../css/l/l1k6rfq7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="to8tv_bdi"/><path class="palodkbln"/><path class="zmgop4_qn"/><path class="l1k6rfq7v"/></g>`,
		"fallback": "solar:chat-square-call-bold-duotone",
	});
}

export default Component;
