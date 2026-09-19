import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqmsfeblw.css';
import '../../css/c/czh7avbpl.css';
import '../../css/l/lv0a6gbpi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqmsfeblw"/><path class="czh7avbpl"/><path class="lv0a6gbpi"/></g>`,
		"fallback": "fluent-emoji-high-contrast:head-shaking-vertically",
	});
}

export default Component;
