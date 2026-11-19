import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xvfmnjb6v.css';
import '../../css/h/h1y4n0biy.css';
import '../../css/p/pxr9mrjbf.css';
import '../../css/p/p4tnt3xxj.css';
import '../../css/u/uckmj9w8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xvfmnjb6v"/><path class="h1y4n0biy"/><path class="pxr9mrjbf"/><circle class="p4tnt3xxj"/><circle class="uckmj9w8k"/></g>`,
		"fallback": "andrsrxn:house-day",
	});
}

export default Component;
