import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k83m5nbla.css';
import '../../css/o/odbostb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k83m5nbla"/><path class="odbostb8b"/></g>`,
		"fallback": "hugeicons:chart-breakout-circle",
	});
}

export default Component;
