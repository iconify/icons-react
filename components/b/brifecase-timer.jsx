import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/r/rh_fox7ue.css';
import '../../css/b/b40u25bhd.css';
import '../../css/l/lwenppemr.css';
import '../../css/x/x8uq8pl-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="rh_fox7ue"/><path class="b40u25bhd"/><path class="lwenppemr"/><path class="x8uq8pl-b"/></g>`,
		"fallback": "reicon:brifecase-timer",
	});
}

export default Component;
