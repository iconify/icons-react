import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t6z9inorb.css';
import '../../css/n/ng482ea3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t6z9inorb"/><path class="ng482ea3e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:hook",
	});
}

export default Component;
