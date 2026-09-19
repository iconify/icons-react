import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/websu8mzr.css';
import '../../css/h/hhr8dnd9j.css';
import '../../css/d/d06in-ynq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="websu8mzr"/><path class="hhr8dnd9j"/><path class="d06in-ynq"/></g>`,
		"fallback": "hugeicons:basketball-01",
	});
}

export default Component;
