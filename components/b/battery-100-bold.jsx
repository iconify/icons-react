import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g85xu4buw.css';
import '../../css/p/p0a0ftcxr.css';
import '../../css/l/lyvx4mbnc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g85xu4buw"/><path clip-rule="evenodd" class="p0a0ftcxr"/><path class="lyvx4mbnc"/></g>`,
		"fallback": "glyphs:battery-100-bold",
	});
}

export default Component;
