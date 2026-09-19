import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9ctifb0t.css';
import '../../css/o/or9nmxbka.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9ctifb0t"/><path class="or9nmxbka"/></g>`,
		"fallback": "fluent-emoji-high-contrast:circled-m",
	});
}

export default Component;
