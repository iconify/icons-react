import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/j/jwcz0hbig.css';
import '../../css/r/rjqp7ubcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="jwcz0hbig"/><path class="rjqp7ubcm"/></g>`,
		"fallback": "keyline-icons:droplet-off-sharp",
	});
}

export default Component;
