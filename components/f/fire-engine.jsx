import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj57y5e6u.css';
import '../../css/c/cf10y0bpw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj57y5e6u"/><path class="cf10y0bpw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fire-engine",
	});
}

export default Component;
