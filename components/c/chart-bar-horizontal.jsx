import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/sjv9wy0ft.css';
import '../../css/h/hjd5wlsvp.css';
import '../../css/c/cy-437bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="sjv9wy0ft wm-shadow"/><path class="hjd5wlsvp wm-shadow"/><path class="cy-437bpc"/></g>`,
		"fallback": "withicons-brutal:chart-bar-horizontal",
	});
}

export default Component;
