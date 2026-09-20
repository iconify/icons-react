import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae849gbxa.css';
import '../../css/d/dcxmy_bda.css';
import '../../css/t/t2yrjkbhe.css';
import '../../css/j/j2raf0bsp.css';
import '../../css/n/n8cr0ibzg.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/l/llwlffbje.css';
import '../../css/y/yz_kflb0a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ae849gbxa"><path class="dcxmy_bda"/><path class="t2yrjkbhe"/><path class="j2raf0bsp"/><path class="n8cr0ibzg"/></g><g class="ij2x_72vy"><path class="llwlffbje"/><path class="yz_kflb0a"/></g>`,
		"fallback": "openmoji:hospital",
	});
}

export default Component;
