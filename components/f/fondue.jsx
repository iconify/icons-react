import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tqhhk2s6g.css';
import '../../css/v/vyba-pb1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tqhhk2s6g"/><path class="vyba-pb1d"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fondue",
	});
}

export default Component;
