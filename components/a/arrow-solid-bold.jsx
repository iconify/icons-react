import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o5upazbtj.css';
import '../../css/i/i8wjw1bah.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="o5upazbtj"/><path class="i8wjw1bah"/></g>`,
		"fallback": "glyphs:arrow-solid-bold",
	});
}

export default Component;
