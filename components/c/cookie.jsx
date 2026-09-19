import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk1c6ibdc.css';
import '../../css/n/nx2-cvbwa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bk1c6ibdc"/><path class="nx2-cvbwa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cookie",
	});
}

export default Component;
