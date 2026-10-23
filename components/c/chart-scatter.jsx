import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kifgjgbdq.css';
import '../../css/c/czz5en-9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kifgjgbdq"/><path class="czz5en-9x"/></g>`,
		"fallback": "andrsrxn:chart-scatter",
	});
}

export default Component;
