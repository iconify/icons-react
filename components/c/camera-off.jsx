import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/trw91eb6p.css';
import '../../css/x/xxb9zre8n.css';
import '../../css/b/b_kj357lv.css';
import '../../css/j/jvh7lq1jm.css';
import '../../css/e/ef89_25rv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="trw91eb6p wm-shadow"/><path class="wm-shadow xxb9zre8n"/><path class="b_kj357lv"/><path class="jvh7lq1jm"/><path class="ef89_25rv wm-s"/></g>`,
		"fallback": "withicons-brutal:camera-off",
	});
}

export default Component;
