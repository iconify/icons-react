import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i9an4pqeu.css';
import '../../css/q/qpr5s0bxr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i9an4pqeu"/><path clip-rule="evenodd" class="qpr5s0bxr"/></g>`,
		"fallback": "gravity-ui:circle-number-6-fill",
	});
}

export default Component;
