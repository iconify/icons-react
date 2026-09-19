import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m7ztwobiu.css';
import '../../css/x/x83f30n5v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m7ztwobiu"/><path class="x83f30n5v"/></g>`,
		"fallback": "bi:backspace-reverse",
	});
}

export default Component;
