import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k848jfb0t.css';
import '../../css/l/lrtavlbix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="k848jfb0t"/><path class="lrtavlbix"/></g>`,
		"fallback": "solar:history-bold-duotone",
	});
}

export default Component;
