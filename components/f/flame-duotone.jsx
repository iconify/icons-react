import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q6gw3sw_e.css';
import '../../css/l/l-co4o5yc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="q6gw3sw_e"/><path class="l-co4o5yc"/></g>`,
		"fallback": "reicon:flame-duotone",
	});
}

export default Component;
