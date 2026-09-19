import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4lzz6btz.css';
import '../../css/y/yfft0bc1h.css';
import '../../css/m/mmom_acqv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4lzz6btz"/><path clip-rule="evenodd" class="yfft0bc1h"/><path clip-rule="evenodd" class="mmom_acqv"/></g>`,
		"fallback": "glyphs:grin-tongue-silly-bold",
	});
}

export default Component;
