import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iu281xbsj.css';
import '../../css/y/ylh1uybdt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iu281xbsj"/><path class="ylh1uybdt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bus",
	});
}

export default Component;
