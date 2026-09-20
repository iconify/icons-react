import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/d/dawcsab1j.css';
import '../../css/d/dv9bu8b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="dawcsab1j"/><path class="dv9bu8b_h"/></g>`,
		"fallback": "si:actions-line",
	});
}

export default Component;
