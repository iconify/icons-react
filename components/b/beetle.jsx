import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rtykppb3x.css';
import '../../css/h/htnflubgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rtykppb3x"/><path class="htnflubgu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:beetle",
	});
}

export default Component;
