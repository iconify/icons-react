import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qy08_wu9m.css';
import '../../css/y/y7i7dktoe.css';
import '../../css/h/h5znycccm.css';
import '../../css/w/w65uqpbul.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qy08_wu9m"/><path class="y7i7dktoe"/><path class="h5znycccm"/><path class="w65uqpbul"/></g>`,
		"fallback": "fluent-emoji-high-contrast:dango",
	});
}

export default Component;
