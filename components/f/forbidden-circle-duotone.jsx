import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ezm0wnf3a.css';
import '../../css/w/w-z509bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ezm0wnf3a"/><path class="w-z509bus"/></g>`,
		"fallback": "reicon:forbidden-circle-duotone",
	});
}

export default Component;
