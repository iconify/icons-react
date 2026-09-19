import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wstb66fzc.css';
import '../../css/h/h0a1mu10q.css';
import '../../css/l/lvh0zsbby.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wstb66fzc"/><path class="h0a1mu10q"/><path class="lvh0zsbby"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-tongue",
	});
}

export default Component;
