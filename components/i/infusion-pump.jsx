import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l2ep8k-xj.css';
import '../../css/b/bk4n85bqk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l2ep8k-xj"/><path class="bk4n85bqk"/></g>`,
		"fallback": "healthicons:infusion-pump",
	});
}

export default Component;
