import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sulngtg2t.css';
import '../../css/n/nodw7zprb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sulngtg2t"/><path class="nodw7zprb"/></g>`,
		"fallback": "glyphs:directions-sign-bold",
	});
}

export default Component;
