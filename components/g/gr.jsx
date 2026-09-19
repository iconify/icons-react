import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fa6lstzyt.css';
import '../../css/p/pe-28bbuz.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="fa6lstzyt"/><path class="pe-28bbuz"/></g>`,
		"fallback": "cif:gr",
	});
}

export default Component;
