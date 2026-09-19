import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yh2wexlbk.css';
import '../../css/s/s1uuiv77j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yh2wexlbk"/><path clip-rule="evenodd" class="s1uuiv77j"/></g>`,
		"fallback": "healthicons:inpatient-negative",
	});
}

export default Component;
