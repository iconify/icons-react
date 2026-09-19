import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p7i1eel1k.css';
import '../../css/m/mhh-5pb9k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p7i1eel1k"/><path class="mhh-5pb9k"/></g>`,
		"fallback": "bi:duffle",
	});
}

export default Component;
