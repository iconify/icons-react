import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v-34lhb2x.css';
import '../../css/j/j5vrp6zvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v-34lhb2x"/><path class="j5vrp6zvy"/></g>`,
		"fallback": "gg:import",
	});
}

export default Component;
