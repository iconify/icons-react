import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/o/ombon-bfp.css';
import '../../css/h/htprqzbrq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ombon-bfp"/><path class="htprqzbrq"/></g>`,
		"fallback": "keyline-icons:graduation-cap-sharp-fill",
	});
}

export default Component;
