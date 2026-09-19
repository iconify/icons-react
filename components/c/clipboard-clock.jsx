import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vptemybwm.css';
import '../../css/l/l5t4kvb6g.css';
import '../../css/u/ucje65n3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="vptemybwm"/><path class="l5t4kvb6g"/><path class="ucje65n3j"/></g>`,
		"fallback": "hugeicons:clipboard-clock",
	});
}

export default Component;
