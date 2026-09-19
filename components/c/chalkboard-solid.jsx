import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7yb3xbdy.css';
import '../../css/q/q6obd0bbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i7yb3xbdy"/><path class="q6obd0bbp"/></g>`,
		"fallback": "flowbite:chalkboard-solid",
	});
}

export default Component;
