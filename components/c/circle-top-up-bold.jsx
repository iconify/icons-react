import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xu4yabspx.css';
import '../../css/q/q3oh0fbbe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xu4yabspx"/><path class="q3oh0fbbe"/></g>`,
		"fallback": "solar:circle-top-up-bold",
	});
}

export default Component;
