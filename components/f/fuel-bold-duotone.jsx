import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ev_6lhbzt.css';
import '../../css/g/g0ooo8bxb.css';
import '../../css/b/b69_cg5od.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ev_6lhbzt"/><path class="g0ooo8bxb"/><path class="b69_cg5od"/></g>`,
		"fallback": "solar:fuel-bold-duotone",
	});
}

export default Component;
