import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vf2dabz1g.css';
import '../../css/n/nd403dbib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vf2dabz1g"/><path class="nd403dbib"/></g>`,
		"fallback": "hugeicons:filter-reset",
	});
}

export default Component;
