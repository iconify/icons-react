import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ralt40u9y.css';
import '../../css/o/o73_1kbsr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ralt40u9y"/><path class="o73_1kbsr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:heart-with-ribbon",
	});
}

export default Component;
