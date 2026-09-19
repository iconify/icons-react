import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/ntn844azb.css';
import '../../css/y/ymca-t65m.css';
import '../../css/l/lbpc0voao.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ntn844azb"/><path class="ymca-t65m"/><path class="lbpc0voao"/></g>`,
		"fallback": "fluent-emoji-high-contrast:camera",
	});
}

export default Component;
