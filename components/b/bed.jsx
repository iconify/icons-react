import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k8x1ld79b.css';
import '../../css/e/ei3fsyb8p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k8x1ld79b"/><path class="ei3fsyb8p"/></g>`,
		"fallback": "iconoir:bed",
	});
}

export default Component;
