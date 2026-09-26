import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0anpxbww.css';
import '../../css/r/rqco7omwy.css';
import '../../css/f/f_7mvhbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0anpxbww"/><path class="rqco7omwy"/><path clip-rule="evenodd" class="f_7mvhbyy"/></g>`,
		"fallback": "solar:file-question-mark-outline",
	});
}

export default Component;
