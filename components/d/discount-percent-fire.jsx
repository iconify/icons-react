import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w196yj2-i.css';
import '../../css/c/c5m0wxbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w196yj2-i"/><path class="c5m0wxbcz"/></g>`,
		"fallback": "streamline-sharp:discount-percent-fire",
	});
}

export default Component;
