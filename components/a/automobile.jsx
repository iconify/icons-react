import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dtv6evf2s.css';
import '../../css/u/uz33s3z-e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dtv6evf2s"/><path class="uz33s3z-e"/></g>`,
		"fallback": "fluent-emoji-high-contrast:automobile",
	});
}

export default Component;
