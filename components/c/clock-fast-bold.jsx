import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wgu_60bdz.css';
import '../../css/n/nj8gx4bfi.css';
import '../../css/e/essrxs0ax.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wgu_60bdz"/><path clip-rule="evenodd" class="nj8gx4bfi"/><path class="essrxs0ax"/></g>`,
		"fallback": "glyphs:clock-fast-bold",
	});
}

export default Component;
