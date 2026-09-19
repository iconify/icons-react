import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tnfzy09-l.css';
import '../../css/c/c3hg06khz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tnfzy09-l"/><path class="c3hg06khz"/></g>`,
		"fallback": "fluent-emoji-high-contrast:1st-place-medal",
	});
}

export default Component;
