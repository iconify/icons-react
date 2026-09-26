import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/whz6uu_tj.css';
import '../../css/e/eg72tgbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="whz6uu_tj"/><path class="eg72tgbud"/></g>`,
		"fallback": "solar:grid-3x2-bold-duotone",
	});
}

export default Component;
