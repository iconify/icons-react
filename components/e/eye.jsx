import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/r/rm4udvayk.css';
import '../../css/p/po4xt0brp.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="rm4udvayk"/><path class="po4xt0brp"/></g>`,
		"fallback": "system-uicons:eye",
	});
}

export default Component;
