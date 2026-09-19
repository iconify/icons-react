import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vp13b1btc.css';
import '../../css/q/qhfsvrb9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vp13b1btc"/><path class="qhfsvrb9a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hot-beverage",
	});
}

export default Component;
