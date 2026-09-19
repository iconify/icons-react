import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gysbi40kg.css';
import '../../css/p/p29duja6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gysbi40kg"/><path class="p29duja6o"/></g>`,
		"fallback": "fluent-emoji-high-contrast:headstone",
	});
}

export default Component;
