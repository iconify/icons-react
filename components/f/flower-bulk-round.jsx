import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qttdo8b4g.css';
import '../../css/v/v-cnqwb4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qttdo8b4g"/><path class="v-cnqwb4y"/></g>`,
		"fallback": "coolicons:flower-bulk-round",
	});
}

export default Component;
