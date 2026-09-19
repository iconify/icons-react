import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u0de-k0ac.css';
import '../../css/z/zva0s15tb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u0de-k0ac"/><path class="zva0s15tb"/></g>`,
		"fallback": "hugeicons:cloud-big-rain",
	});
}

export default Component;
