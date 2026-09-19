import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h9f8jm2-z.css';
import '../../css/h/hw1b44bxw.css';
import '../../css/d/d9i98uvix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="h9f8jm2-z"/><path class="hw1b44bxw"/><path class="d9i98uvix"/></g>`,
		"fallback": "hugeicons:apricot",
	});
}

export default Component;
