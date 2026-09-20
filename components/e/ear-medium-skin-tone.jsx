import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfmra0ocb.css';
import '../../css/r/r9ous7bii.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/ty0jp0byr.css';
import '../../css/z/zyiv9wvjc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfmra0ocb"/><path class="r9ous7bii"/><g class="ij2x_72vy"><path class="ty0jp0byr"/><path class="zyiv9wvjc"/></g>`,
		"fallback": "openmoji:ear-medium-skin-tone",
	});
}

export default Component;
