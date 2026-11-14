import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/q30p4-6kp.css';
import '../../css/e/e5kqksb_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="q30p4-6kp"/><path class="e5kqksb_y"/></g>`,
		"fallback": "hugeicons:id-card",
	});
}

export default Component;
