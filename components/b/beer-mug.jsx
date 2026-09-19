import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h-5ssyblo.css';
import '../../css/s/ssqvtilog.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h-5ssyblo"/><path class="ssqvtilog"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beer-mug",
	});
}

export default Component;
