import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qwtoqccvd.css';
import '../../css/k/kt_wmkbmo.css';
import '../../css/z/z_v77-bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qwtoqccvd"/><path class="kt_wmkbmo"/><path class="z_v77-bgx"/></g>`,
		"fallback": "solar:calendar-mark-bold-duotone",
	});
}

export default Component;
