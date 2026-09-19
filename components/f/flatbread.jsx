import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ux5qjaczy.css';
import '../../css/n/ngeit7bvr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ux5qjaczy"/><path class="ngeit7bvr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:flatbread",
	});
}

export default Component;
