import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w5xyudbvo.css';
import '../../css/h/hvpk04b-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w5xyudbvo"/><path class="hvpk04b-d"/></g>`,
		"fallback": "hugeicons:custom-field",
	});
}

export default Component;
