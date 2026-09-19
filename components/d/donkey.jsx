import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hm372uzgc.css';
import '../../css/n/nwubzrbqa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hm372uzgc"/><path clip-rule="evenodd" class="nwubzrbqa"/></g>`,
		"fallback": "fluent-emoji-high-contrast:donkey",
	});
}

export default Component;
