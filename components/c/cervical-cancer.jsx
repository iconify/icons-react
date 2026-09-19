import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a-oytwb8e.css';
import '../../css/b/bqnwlwbde.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a-oytwb8e"/><path clip-rule="evenodd" class="bqnwlwbde"/></g>`,
		"fallback": "healthicons:cervical-cancer",
	});
}

export default Component;
