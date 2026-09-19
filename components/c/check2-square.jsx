import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tgc2habux.css';
import '../../css/e/ehszqyb2h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tgc2habux"/><path class="ehszqyb2h"/></g>`,
		"fallback": "bi:check2-square",
	});
}

export default Component;
