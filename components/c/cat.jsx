import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yyic2nb9l.css';
import '../../css/n/nbkj2hbvt.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yyic2nb9l"/><path class="nbkj2hbvt"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cat",
	});
}

export default Component;
