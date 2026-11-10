import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hne5egbfs.css';
import '../../css/d/d33c2bbdv.css';
import '../../css/y/yt75fxb2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hne5egbfs"/><path class="d33c2bbdv"/><path class="yt75fxb2z"/></g>`,
		"fallback": "andrsrxn:battery-plus",
	});
}

export default Component;
