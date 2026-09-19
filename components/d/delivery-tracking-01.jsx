import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yateppugv.css';
import '../../css/e/e1h8zkb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yateppugv"/><path class="e1h8zkb4s"/></g>`,
		"fallback": "hugeicons:delivery-tracking-01",
	});
}

export default Component;
