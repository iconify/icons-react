import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bwzuzjkxa.css';
import '../../css/a/aw50nib2n.css';
import '../../css/z/z46_r9bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="matrix(1 0 .02944 .99957 1.67 15.12)" class="bwzuzjkxa"/><rect transform="matrix(1 0 .02944 .99957 16.34 14.93)" class="bwzuzjkxa"/><path class="aw50nib2n"/><path class="z46_r9bbg"/></g>`,
		"fallback": "andrsrxn:cafe",
	});
}

export default Component;
