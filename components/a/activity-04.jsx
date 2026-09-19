import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jr7vbsb8z.css';
import '../../css/c/cgdrp4m5c.css';
import '../../css/f/fn9kwg92c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jr7vbsb8z"/><path class="cgdrp4m5c"/><path class="fn9kwg92c"/></g>`,
		"fallback": "hugeicons:activity-04",
	});
}

export default Component;
