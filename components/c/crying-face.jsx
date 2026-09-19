import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrkbg_-7r.css';
import '../../css/l/l2x9gdcmp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hrkbg_-7r"/><path class="l2x9gdcmp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:crying-face",
	});
}

export default Component;
