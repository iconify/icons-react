import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l3wpbsbfr.css';
import '../../css/l/lahmkgb2w.css';
import '../../css/y/yk9b1vafc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l3wpbsbfr"/><path class="lahmkgb2w"/><path class="yk9b1vafc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:fireworks",
	});
}

export default Component;
