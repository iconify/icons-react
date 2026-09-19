import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tzkiesbng.css';
import '../../css/o/o6p41d9yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tzkiesbng"/><circle class="o6p41d9yz"/></g>`,
		"fallback": "hugeicons:bounce-right",
	});
}

export default Component;
