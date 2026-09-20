import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o2an8tabl.css';
import '../../css/k/kbsq4-bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o2an8tabl"/><path class="kbsq4-bjo"/></g>`,
		"fallback": "streamline-sharp:cupcake",
	});
}

export default Component;
