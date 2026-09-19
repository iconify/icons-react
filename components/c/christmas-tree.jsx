import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qko6ygb0e.css';
import '../../css/l/l9sxa1fld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qko6ygb0e"/><path class="l9sxa1fld"/></g>`,
		"fallback": "fluent-emoji-high-contrast:christmas-tree",
	});
}

export default Component;
