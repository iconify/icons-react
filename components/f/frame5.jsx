import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1_g_if2b.css';
import '../../css/h/hntgybcog.css';
import '../../css/c/cpnkntywn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGezrOSaGs" class="j1_g_if2b"/></defs><g class="hntgybcog"><path class="cpnkntywn"/><use href="#SVGezrOSaGs"/><use href="#SVGezrOSaGs"/></g>`,
		"fallback": "reicon:frame5",
	});
}

export default Component;
