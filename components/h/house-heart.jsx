import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ao9p7ovvc.css';
import '../../css/d/drqt0mgmd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ao9p7ovvc"/><path class="drqt0mgmd"/></g>`,
		"fallback": "bi:house-heart",
	});
}

export default Component;
