import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/p/p4u7d8hbn.css';
import '../../css/f/f7gqgccam.css';
import '../../css/v/v8jxs0nuf.css';
import '../../css/y/y_f290mhz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="p4u7d8hbn wm-shadow"/><path class="f7gqgccam wm-shadow"/><path class="v8jxs0nuf"/><path class="y_f290mhz"/></g>`,
		"fallback": "withicons-brutal:badge-alert",
	});
}

export default Component;
