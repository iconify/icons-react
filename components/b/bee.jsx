import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a3ql5twwq.css';
import '../../css/a/aq5vigbuw.css';
import '../../css/h/hcqwz0r-m.css';
import '../../css/i/i8b26ybmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a3ql5twwq wm-shadow"/><path class="aq5vigbuw wm-shadow"/><path class="hcqwz0r-m"/><path class="i8b26ybmm"/></g>`,
		"fallback": "withicons-brutal:bee",
	});
}

export default Component;
