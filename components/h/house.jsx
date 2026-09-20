import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lxxbevx9y.css';
import '../../css/c/c4g_yjbwf.css';
import '../../css/v/vwva7rs6y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lxxbevx9y"/><path clip-rule="evenodd" class="c4g_yjbwf"/><path clip-rule="evenodd" class="vwva7rs6y"/></g>`,
		"fallback": "pepicons-print:house",
	});
}

export default Component;
