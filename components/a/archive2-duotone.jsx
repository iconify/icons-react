import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_g14sbgx.css';
import '../../css/s/szcmm9bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i_g14sbgx"/><path class="szcmm9bvt"/></g>`,
		"fallback": "reicon:archive2-duotone",
	});
}

export default Component;
