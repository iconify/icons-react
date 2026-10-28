import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hc4fnabdq.css';
import '../../css/x/xw2n5-bda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hc4fnabdq"/><path class="xw2n5-bda"/></g>`,
		"fallback": "andrsrxn:axis-x",
	});
}

export default Component;
