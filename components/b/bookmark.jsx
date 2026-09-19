import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ax-8_0cyy.css';
import '../../css/q/qhj3lgyvm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ax-8_0cyy"/><path class="qhj3lgyvm"/></g>`,
		"fallback": "fluent-emoji-high-contrast:bookmark",
	});
}

export default Component;
