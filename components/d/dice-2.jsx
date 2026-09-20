import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oy-pxnb-v.css';
import '../../css/r/rgeccubmm.css';
import '../../css/q/q55w5fb-e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oy-pxnb-v"/><path class="rgeccubmm"/><path class="q55w5fb-e"/></g>`,
		"fallback": "streamline-color:dice-2",
	});
}

export default Component;
