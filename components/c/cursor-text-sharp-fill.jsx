import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/rq-6ubcwz.css';
import '../../css/m/m81dq0j8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="rq-6ubcwz"/><path class="m81dq0j8s"/></g>`,
		"fallback": "keyline-icons:cursor-text-sharp-fill",
	});
}

export default Component;
