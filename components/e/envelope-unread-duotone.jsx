import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w4brwwbzi.css';
import '../../css/f/f1h18-blq.css';
import '../../css/x/xhcoxr84o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w4brwwbzi"/><path class="f1h18-blq"/><path class="xhcoxr84o"/></g>`,
		"fallback": "reicon:envelope-unread-duotone",
	});
}

export default Component;
