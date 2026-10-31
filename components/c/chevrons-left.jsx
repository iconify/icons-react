import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/w1786d5mz.css';
import '../../css/w/wnbic79xe.css';
import '../../css/e/er7rs_byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="w1786d5mz wm-shadow"/><path class="wm-shadow wnbic79xe"/><path class="er7rs_byh"/></g>`,
		"fallback": "withicons-brutal:chevrons-left",
	});
}

export default Component;
