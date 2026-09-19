import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fzvb9obgc.css';
import '../../css/k/kqqjwsb0n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fzvb9obgc"/><path class="kqqjwsb0n"/></g>`,
		"fallback": "bi:hospital",
	});
}

export default Component;
