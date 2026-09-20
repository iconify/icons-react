import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/c/cuabdubep.css';
import '../../css/g/guewfbcxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="cuabdubep"/><path class="guewfbcxi"/></g>`,
		"fallback": "si:eye-line",
	});
}

export default Component;
