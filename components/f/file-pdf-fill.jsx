import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wip4_abus.css';
import '../../css/m/mlfpdxb9y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wip4_abus"/><path class="mlfpdxb9y"/></g>`,
		"fallback": "bi:file-pdf-fill",
	});
}

export default Component;
