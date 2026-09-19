import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yy99bjb0o.css';
import '../../css/g/gva8hk-9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yy99bjb0o"/><path class="gva8hk-9u"/></g>`,
		"fallback": "fluent-emoji-high-contrast:front-facing-baby-chick",
	});
}

export default Component;
