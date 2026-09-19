import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l8gq9ob0l.css';
import '../../css/n/nkbistf8y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l8gq9ob0l"/><path clip-rule="evenodd" class="nkbistf8y"/></g>`,
		"fallback": "healthicons:hazardous",
	});
}

export default Component;
