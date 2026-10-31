import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/v6j7-nbvx.css';
import '../../css/l/lh5-a8brr.css';
import '../../css/n/n5gk_ubvh.css';
import '../../css/q/qf___5dnj.css';
import '../../css/p/pawg8ccvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="v6j7-nbvx wm-shadow"/><path class="lh5-a8brr wm-shadow"/><path class="n5gk_ubvh"/><path class="qf___5dnj"/><path class="pawg8ccvo"/></g>`,
		"fallback": "withicons-brutal:glass-water",
	});
}

export default Component;
