import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbhnfcb0d.css';
import '../../css/c/cd97bde0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbhnfcb0d"/><path class="cd97bde0e"/></g>`,
		"fallback": "reicon:calendar-remove-filled",
	});
}

export default Component;
