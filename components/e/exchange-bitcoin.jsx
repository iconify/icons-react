import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/irxymccfj.css';
import '../../css/k/khfhn220m.css';
import '../../css/y/ylvh8-bia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="irxymccfj"/><path class="khfhn220m"/><path class="ylvh8-bia"/></g>`,
		"fallback": "hugeicons:exchange-bitcoin",
	});
}

export default Component;
