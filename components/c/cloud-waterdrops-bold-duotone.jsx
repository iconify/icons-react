import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/spsi6z36x.css';
import '../../css/o/okf8tccvc.css';
import '../../css/x/x_5q0gb2d.css';
import '../../css/r/r9nn52mes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="spsi6z36x"/><path class="okf8tccvc"/><path class="x_5q0gb2d"/><path class="r9nn52mes"/></g>`,
		"fallback": "solar:cloud-waterdrops-bold-duotone",
	});
}

export default Component;
