import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeuljtb4o.css';
import '../../css/r/rh2_wobnx.css';
import '../../css/w/w6_7avbsy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeuljtb4o"/><path class="rh2_wobnx"/><path class="w6_7avbsy"/>`,
		"fallback": "energy-icons:hydraulic-cylinder-20",
	});
}

export default Component;
