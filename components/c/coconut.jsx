import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oy86dqb1h.css';
import '../../css/t/t96wzr0rp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oy86dqb1h"/><path class="t96wzr0rp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:coconut",
	});
}

export default Component;
