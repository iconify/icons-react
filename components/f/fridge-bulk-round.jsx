import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-5yhbcwi.css';
import '../../css/w/wz_3ew2hq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-5yhbcwi"/><path class="wz_3ew2hq"/></g>`,
		"fallback": "coolicons:fridge-bulk-round",
	});
}

export default Component;
