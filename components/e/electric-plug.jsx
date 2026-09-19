import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lkpocti5w.css';
import '../../css/r/rtela52jf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lkpocti5w"/><path class="rtela52jf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:electric-plug",
	});
}

export default Component;
