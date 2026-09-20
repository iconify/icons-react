import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr6ake7ol.css';
import '../../css/t/t2s5apbvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rr6ake7ol"/><path class="t2s5apbvr"/></g>`,
		"fallback": "mynaui:cart-check",
	});
}

export default Component;
