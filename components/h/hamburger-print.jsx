import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fg-4bjb3w.css';
import '../../css/b/blnixl87k.css';
import '../../css/w/wx8fs402j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fg-4bjb3w"/><path clip-rule="evenodd" class="blnixl87k"/><path class="wx8fs402j"/></g>`,
		"fallback": "pepicons:hamburger-print",
	});
}

export default Component;
