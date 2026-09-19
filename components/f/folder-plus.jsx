import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fugbhetlq.css';
import '../../css/h/hh0j7ac0b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fugbhetlq"/><path class="hh0j7ac0b"/></g>`,
		"fallback": "bi:folder-plus",
	});
}

export default Component;
