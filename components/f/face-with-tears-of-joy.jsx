import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dbb0izpwo.css';
import '../../css/n/npyjmvb3s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dbb0izpwo"/><path class="npyjmvb3s"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-tears-of-joy",
	});
}

export default Component;
