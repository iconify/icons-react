import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjag56b6z.css';
import '../../css/j/j8l2ed4er.css';
import '../../css/d/d9tahkbuu.css';
import '../../css/o/o74_6ebpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjag56b6z"/><path class="j8l2ed4er"/><path class="d9tahkbuu"/><path class="o74_6ebpd"/></g>`,
		"fallback": "solar:hand-stars-bold-duotone",
	});
}

export default Component;
