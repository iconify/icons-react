import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u5uti1bum.css';
import '../../css/w/w84utibhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u5uti1bum"/><path class="w84utibhp"/></g>`,
		"fallback": "solar:arrow-up-from-line-bold-duotone",
	});
}

export default Component;
