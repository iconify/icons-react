import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rovwibb1o.css';
import '../../css/v/vs0v-hkgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rovwibb1o"/><path class="vs0v-hkgx"/></g>`,
		"fallback": "coolicons:calendar-plus-bulk-round",
	});
}

export default Component;
