import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bvdohvm-f.css';
import '../../css/k/kbsibmb9q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bvdohvm-f"/><path class="kbsibmb9q"/></g>`,
		"fallback": "healthicons:exercise-walking",
	});
}

export default Component;
