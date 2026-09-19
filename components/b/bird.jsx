import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yww4-4bea.css';
import '../../css/h/hfbphw_mb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yww4-4bea"/><path class="hfbphw_mb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bird",
	});
}

export default Component;
