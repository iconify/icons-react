import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9xxi5bau.css';
import '../../css/k/kt8jrebxd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t9xxi5bau"/><path class="kt8jrebxd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:alarm-clock",
	});
}

export default Component;
