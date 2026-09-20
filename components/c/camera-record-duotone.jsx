import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jg-zjmaar.css';
import '../../css/u/uj9_4b6rk.css';
import '../../css/e/e61scxqpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jg-zjmaar"/><path clip-rule="evenodd" class="uj9_4b6rk"/><path class="e61scxqpx"/></g>`,
		"fallback": "reicon:camera-record-duotone",
	});
}

export default Component;
