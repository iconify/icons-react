import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d03hdob2s.css';
import '../../css/s/s646tobeh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d03hdob2s"/><path class="s646tobeh"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-symbols-on-mouth",
	});
}

export default Component;
