import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e0uni0oah.css';
import '../../css/a/alc2iebqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e0uni0oah"/><path class="alc2iebqc"/></g>`,
		"fallback": "solar:forbidden-circle-bold",
	});
}

export default Component;
