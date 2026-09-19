import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hzuyhbbzv.css';
import '../../css/w/wp3-z_51t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hzuyhbbzv"/><path class="wp3-z_51t"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bikini",
	});
}

export default Component;
