import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtuzvvupw.css';
import '../../css/o/oxzuhkqfc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtuzvvupw"/><path clip-rule="evenodd" class="oxzuhkqfc"/></g>`,
		"fallback": "streamline-color:discount-percent-coupon-flat",
	});
}

export default Component;
