import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fmg6ukr8j.css';
import '../../css/a/akpte8y-t.css';
import '../../css/w/w-uexwl3c.css';
import '../../css/d/dcng7htvz.css';
import '../../css/h/h3osy9bsa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fmg6ukr8j"/><path class="akpte8y-t"/><circle transform="rotate(90 6.7 15.86)" class="w-uexwl3c"/><circle transform="matrix(0 1 1 0 15.33 13.9)" class="dcng7htvz"/><path class="h3osy9bsa"/></g>`,
		"fallback": "andrsrxn:car-crash",
	});
}

export default Component;
