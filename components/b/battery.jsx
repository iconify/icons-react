import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/td2h1cctd.css';
import '../../css/q/qwue9bbsp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="td2h1cctd"/><path class="qwue9bbsp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:battery",
	});
}

export default Component;
