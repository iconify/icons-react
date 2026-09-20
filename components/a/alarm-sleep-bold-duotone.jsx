import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xar3zbcoy.css';
import '../../css/q/qbj1zqrnu.css';
import '../../css/o/omt0vob3d.css';
import '../../css/p/pl37d4g4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xar3zbcoy"/><path class="qbj1zqrnu"/><path class="omt0vob3d"/><path class="pl37d4g4d"/></g>`,
		"fallback": "solar:alarm-sleep-bold-duotone",
	});
}

export default Component;
