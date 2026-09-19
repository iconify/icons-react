import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/j01gew6ag.css';
import '../../css/p/pqdlum8dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="j01gew6ag"/><path class="pqdlum8dz"/></g>`,
		"fallback": "hugeicons:bitcoin-filter",
	});
}

export default Component;
