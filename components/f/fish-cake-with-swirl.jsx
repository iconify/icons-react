import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-4_qrbfz.css';
import '../../css/d/ddaeaxbss.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-4_qrbfz"/><path class="ddaeaxbss"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fish-cake-with-swirl",
	});
}

export default Component;
