import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/eb0eaqb3b.css';
import '../../css/d/dgunkhbcz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="eb0eaqb3b"/><path class="dgunkhbcz"/></g>`,
		"fallback": "glyphs:coin-bold",
	});
}

export default Component;
