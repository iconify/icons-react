import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4e3o36cz.css';
import '../../css/j/jvfhggt3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4e3o36cz"/><path class="jvfhggt3x"/></g>`,
		"fallback": "coolicons:flip-vertical-bulk-round",
	});
}

export default Component;
