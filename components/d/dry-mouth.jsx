import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a6twuqi8j.css';
import '../../css/e/e99g3bssn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a6twuqi8j"/><path class="e99g3bssn"/></g>`,
		"fallback": "healthicons:dry-mouth",
	});
}

export default Component;
