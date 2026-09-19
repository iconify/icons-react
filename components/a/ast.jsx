import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p_ur16bcn.css';
import '../../css/y/y_uebdbhh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="p_ur16bcn"/><path class="y_uebdbhh"/></g>`,
		"fallback": "cryptocurrency-color:ast",
	});
}

export default Component;
