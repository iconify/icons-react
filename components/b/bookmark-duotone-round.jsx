import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-f01tbci.css';
import '../../css/a/a6x3xxofj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-f01tbci"/><path class="a6x3xxofj"/></g>`,
		"fallback": "coolicons:bookmark-duotone-round",
	});
}

export default Component;
