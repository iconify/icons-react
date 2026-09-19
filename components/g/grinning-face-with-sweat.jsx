import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cy4btg-md.css';
import '../../css/w/ww2ocubjh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cy4btg-md"/><path class="ww2ocubjh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:grinning-face-with-sweat",
	});
}

export default Component;
