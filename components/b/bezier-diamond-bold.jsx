import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sqkrw4fun.css';
import '../../css/b/brn2yybda.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sqkrw4fun"/><path class="brn2yybda"/></g>`,
		"fallback": "glyphs:bezier-diamond-bold",
	});
}

export default Component;
