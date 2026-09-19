import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m1zci6d1l.css';
import '../../css/x/x4ykvnmoo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m1zci6d1l"/><path class="x4ykvnmoo"/></g>`,
		"fallback": "healthicons:biopsy",
	});
}

export default Component;
