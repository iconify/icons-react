import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/brf0aybbd.css';
import '../../css/a/aumkuub3x.css';
import '../../css/f/f4u25_1js.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="brf0aybbd"/><path class="aumkuub3x"/><path class="f4u25_1js"/></g>`,
		"fallback": "fluent-emoji-high-contrast:gear",
	});
}

export default Component;
