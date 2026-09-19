import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/voiff7u-m.css';
import '../../css/l/lzbkb10sy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="voiff7u-m"/><path class="lzbkb10sy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:butterfly",
	});
}

export default Component;
