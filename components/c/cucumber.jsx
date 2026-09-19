import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o2zmoubcu.css';
import '../../css/h/hm2fvzbxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o2zmoubcu"/><path class="hm2fvzbxx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cucumber",
	});
}

export default Component;
