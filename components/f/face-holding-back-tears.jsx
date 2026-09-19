import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vpbf8gbhb.css';
import '../../css/r/rwwqizbed.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vpbf8gbhb"/><path class="rwwqizbed"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-holding-back-tears",
	});
}

export default Component;
