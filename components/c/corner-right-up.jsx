import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r4k8tbczt.css';
import '../../css/k/kslkmaccd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r4k8tbczt"/><path class="kslkmaccd"/></g>`,
		"fallback": "icon-park:corner-right-up",
	});
}

export default Component;
