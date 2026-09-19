import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-p0ybueh.css';
import '../../css/z/z3p87-2kc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-p0ybueh"/><path clip-rule="evenodd" class="z3p87-2kc"/></g>`,
		"fallback": "healthicons:icd",
	});
}

export default Component;
