import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fcah1r-8f.css';
import '../../css/c/c893ycbij.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fcah1r-8f"/><path class="c893ycbij"/></g>`,
		"fallback": "glyphs:copy-2-bold",
	});
}

export default Component;
