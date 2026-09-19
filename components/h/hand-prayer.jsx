import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vpllkcbpy.css';
import '../../css/w/wqnd57b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vpllkcbpy"/><path class="wqnd57b-q"/></g>`,
		"fallback": "hugeicons:hand-prayer",
	});
}

export default Component;
