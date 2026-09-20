import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2onk_b4t.css';
import '../../css/h/h_122psqo.css';
import '../../css/v/vq2nbvb9b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f2onk_b4t"/><path class="h_122psqo"/><path class="vq2nbvb9b"/></g>`,
		"fallback": "streamline-color:discount-percent-coupon",
	});
}

export default Component;
