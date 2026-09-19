import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l4248uhqs.css';
import '../../css/d/d5tuc-v4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l4248uhqs"/><path class="d5tuc-v4s"/></g>`,
		"fallback": "hugeicons:bitcoin-receipt",
	});
}

export default Component;
