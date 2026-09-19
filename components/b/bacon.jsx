import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n3kslzbgq.css';
import '../../css/z/zyj-2_b-l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n3kslzbgq"/><path class="zyj-2_b-l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bacon",
	});
}

export default Component;
