import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ndr-bibwm.css';
import '../../css/j/jgeem2bda.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ndr-bibwm"/><path class="jgeem2bda"/></g>`,
		"fallback": "heroicons-solid:duplicate",
	});
}

export default Component;
