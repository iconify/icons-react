import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kk06kcbsy.css';
import '../../css/e/ek023yb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kk06kcbsy"/><path class="ek023yb_h"/></g>`,
		"fallback": "hugeicons:biomass-energy",
	});
}

export default Component;
