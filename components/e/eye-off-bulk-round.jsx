import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pb_whea6u.css';
import '../../css/z/zrzntvwmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pb_whea6u"/><path class="zrzntvwmk"/></g>`,
		"fallback": "coolicons:eye-off-bulk-round",
	});
}

export default Component;
