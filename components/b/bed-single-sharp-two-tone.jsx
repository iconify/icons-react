import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/fnobgdc3o.css';
import '../../css/f/f4kk70brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="fnobgdc3o"/><path class="f4kk70brf"/></g>`,
		"fallback": "keyline-icons:bed-single-sharp-two-tone",
	});
}

export default Component;
