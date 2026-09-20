import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eu3rdibck.css';
import '../../css/q/qd0-oybiw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="eu3rdibck"/><path class="qd0-oybiw"/></g>`,
		"fallback": "reicon:asteroid-duotone",
	});
}

export default Component;
