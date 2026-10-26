import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anma4zbmz.css';
import '../../css/a/ajiukk8qu.css';
import '../../css/y/y_8f2ac4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="anma4zbmz"/><path class="ajiukk8qu"/><path class="y_8f2ac4v"/></g>`,
		"fallback": "healthicons:braces",
	});
}

export default Component;
