import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww00gcc0v.css';
import '../../css/f/fkjaaab8a.css';
import '../../css/y/yrsmrebbu.css';
import '../../css/i/ibgj5jtlu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ww00gcc0v"/><path class="fkjaaab8a"/><path class="yrsmrebbu"/><path class="ibgj5jtlu"/></g>`,
		"fallback": "andrsrxn:drone-seed",
	});
}

export default Component;
