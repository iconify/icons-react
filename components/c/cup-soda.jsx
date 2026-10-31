import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cgilv85rn.css';
import '../../css/m/mpsx0n0tx.css';
import '../../css/w/wua8-zbzl.css';
import '../../css/c/caeairb8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cgilv85rn wm-shadow"/><path class="mpsx0n0tx wm-shadow"/><path class="wua8-zbzl"/><path class="caeairb8l"/></g>`,
		"fallback": "withicons-brutal:cup-soda",
	});
}

export default Component;
