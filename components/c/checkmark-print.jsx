import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kldbyvy5v.css';
import '../../css/k/kaj75h1kd.css';
import '../../css/u/ux63s-ozf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="kldbyvy5v"/><path class="kaj75h1kd"/><path class="ux63s-ozf"/></g>`,
		"fallback": "pepicons:checkmark-print",
	});
}

export default Component;
