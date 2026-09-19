import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x57p1aczu.css';
import '../../css/g/grubd94nl.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x57p1aczu"/><path class="grubd94nl"/></g>`,
		"fallback": "et:camera",
	});
}

export default Component;
